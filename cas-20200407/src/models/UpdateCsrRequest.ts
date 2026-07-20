// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCsrRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the CSR. The CsrId is generated when the CSR is uploaded. You can obtain this value by querying the CSR list. For more information, see [ListCsr](https://help.aliyun.com/document_detail/2709717.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 5209
   */
  csrId?: number;
  /**
   * @remarks
   * The private key content in PEM format.
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN RSA PRIVATE KEY----- MII.... -----END RSA PRIVATE KEY-----
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      csrId: 'CsrId',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csrId: 'number',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

