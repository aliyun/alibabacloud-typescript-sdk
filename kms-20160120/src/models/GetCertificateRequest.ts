// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate. It is the globally unique identifier (GUID) of the certificate in Certificates Manager.
   * 
   * This parameter is required.
   * 
   * @example
   * 9a28de48-8d8b-484d-a766-dec4****
   */
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

