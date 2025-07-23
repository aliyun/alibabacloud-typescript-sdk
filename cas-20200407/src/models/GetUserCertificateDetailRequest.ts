// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserCertificateDetailRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to filter return results. Valid values: true and false. Default value: false. **true** specifies that the Cert, Key, EncryptCert, EncryptPrivateKey, SignCert, and SignPrivateKey parameters are not returned. **false** specifies that the parameters are returned.
   * 
   * @example
   * false
   */
  certFilter?: boolean;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * >  You can call the [ListUserCertificateOrder](https://help.aliyun.com/document_detail/455804.html) operation to query the ID.
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

