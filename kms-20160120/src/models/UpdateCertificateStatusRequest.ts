// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCertificateStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate. The ID must be globally unique in Certificates Manager.
   * 
   * This parameter is required.
   * 
   * @example
   * 9a28de48-8d8b-484d-a766-dec4****
   */
  certificateId?: string;
  /**
   * @remarks
   * The status of the certificate. Valid values:
   * 
   * *   INACTIVE: The certificate is disabled.
   * 
   * *   ACTIVE: The certificate is enabled.
   * 
   * *   REVOKED: The certificate is revoked.
   * 
   * > If the certificate is in the REVOKED state, you can use the certificate only to verify a signature, but not to generate a signature.
   * 
   * This parameter is required.
   * 
   * @example
   * INACTIVE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

