// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserCertificateDetailRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to filter certificate content from the response. Valid values:
   * - **true**: The Cert, Key, EncryptCert, EncryptPrivateKey, SignCert, and SignPrivateKey fields are not returned.
   * - **false**: All fields are returned.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  certFilter?: boolean;
  /**
   * @remarks
   * The certificate ID.
   * > You can call [ListUserCertificateOrder](https://help.aliyun.com/document_detail/455804.html) to obtain the certificate ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6055048
   */
  certId?: number;
  static names(): { [key: string]: string } {
    return {
      certFilter: 'CertFilter',
      certId: 'CertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certFilter: 'boolean',
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

