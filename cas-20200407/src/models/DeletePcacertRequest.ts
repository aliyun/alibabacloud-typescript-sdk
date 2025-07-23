// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePCACertRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the certificate. You can call the [ListCert](https://help.aliyun.com/document_detail/452331.html) operation to query the unique identifiers of certificates.
   * 
   * This parameter is required.
   * 
   * @example
   * ccaf0c629c2be1e2ab
   */
  identifier?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

