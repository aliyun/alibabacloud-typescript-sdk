// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserCertificateDetailRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to filter certificate content. If set to **true**, the Cert, Key, EncryptCert, EncryptPrivateKey, SignCert, and SignPrivateKey fields are not returned. If set to **false**, these fields are returned. Default value: false.
   * 
   * @example
   * false
   */
  certFilter?: boolean;
  /**
   * @remarks
   * The certificate ID.
   * > You can obtain this ID by calling [ListUserCertificateOrder](https://help.aliyun.com/document_detail/455804.html).
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

