// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientCertificateStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifiers of the client certificates or server certificates to query. Separate multiple certificate identifiers with commas (,).
   * 
   * 
   * > You can call [ListClientCertificate](https://help.aliyun.com/document_detail/465990.html) to query the unique identifiers of all client certificates and server certificates.
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

