// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCACertificateLogRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the CA certificate to query.
   * 
   * > Call [DescribeCACertificateList](https://help.aliyun.com/document_detail/328095.html) to query the unique identifiers of all CA certificates.
   * 
   * This parameter is required.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
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

