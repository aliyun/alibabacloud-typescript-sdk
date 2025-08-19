// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRevokeClientCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the client certificate or server certificate that you want to revoke.
   * 
   * >  You can call the [ListClientCertificate](https://help.aliyun.com/document_detail/330884.html) operation to query the unique identifiers of all client certificates and server certificates.
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

