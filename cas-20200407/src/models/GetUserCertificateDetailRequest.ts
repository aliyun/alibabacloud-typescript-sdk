// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserCertificateDetailRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to filter the certificate content from the response. Valid values: **true**: The Cert, Key, EncryptCert, EncryptPrivateKey, SignCert, and SignPrivateKey parameters are not returned. **false** (default): All parameters are returned.
   * 
   * @example
   * false
   */
  certFilter?: boolean;
  /**
   * @remarks
   * The ID of the certificate. To get this ID, call the [ListUserCertificateOrder](https://help.aliyun.com/document_detail/455804.html) operation.
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

