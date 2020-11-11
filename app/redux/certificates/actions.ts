import { createActions } from 'reduxsauce';
import { Credential } from '../../services/api/api.types';
import { ICertificateDeeplinkWithDID } from '../../utils/types';

interface CertificatesActionTypes {
  ADD_CERTIFICATE: 'ADD_CERTIFICATE';
  ADD_CERTIFICATE_SUCCESS: 'ADD_CERTIFICATE_SUCCESS';
  ADD_CERTIFICATE_FAILURE: 'ADD_CERTIFICATE_FAILURE';
}

export interface AddCertificateAction {
  type: CertificatesActionTypes['ADD_CERTIFICATE'];
  data: ICertificateDeeplinkWithDID;
}

export interface AddCertificateSuccessAction {
  type: CertificatesActionTypes['ADD_CERTIFICATE_SUCCESS'];
  credential: Credential;
}

export interface AddCertificateFailureAction {
  type: CertificatesActionTypes['ADD_CERTIFICATE_FAILURE'];
  error: string;
}

interface CertificatesActionCreators {
  addCertificate(): AddCertificateAction;
  addCertificateSuccess(credential: Credential): AddCertificateSuccessAction;
  addCertificateFailure(error: string): AddCertificateFailureAction;
}

export type CertificatesAction =
  | AddCertificateAction
  | AddCertificateSuccessAction
  | AddCertificateFailureAction;

const { Types, Creators } = createActions<
  CertificatesActionTypes,
  CertificatesActionCreators
>(
  {
    addCertificate: null,
    addCertificateSuccess: ['credential'],
    addCertificateFailure: ['error'],
  },
  {
    prefix: 'CERTIFICATES/',
  },
);

export const certificatesActionTypes = Types;

export const certificatesActionCreators = Creators;