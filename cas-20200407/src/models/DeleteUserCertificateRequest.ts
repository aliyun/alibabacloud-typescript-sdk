// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * >  You can call the [ListUserCertificateOrder](https://help.aliyun.com/document_detail/455804.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7562353
   */
  certId?: number;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

