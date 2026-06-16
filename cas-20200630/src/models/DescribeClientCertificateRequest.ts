// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the client certificate or server-side certificate to query.
   * 
   * > Call [ListClientCertificate](https://help.aliyun.com/document_detail/465990.html) to query the unique identifiers of all client certificates and server-side certificates.
   * 
   * This parameter is required.
   * 
   * @example
   * d3b95700998e47afc4d95f886579****
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

