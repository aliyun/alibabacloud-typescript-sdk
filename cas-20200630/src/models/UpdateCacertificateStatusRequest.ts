// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCACertificateStatusRequest extends $dara.Model {
  /**
   * @remarks
   * A client token used to ensure the idempotence of the request.
   * 
   * Generate a unique parameter value from your client for each request. The ClientToken parameter supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is different.
   * 
   * @example
   * 3838B684-3075-582B-9A45-8C99104029DF
   */
  clientToken?: string;
  /**
   * @remarks
   * The unique identifier of the CA certificate.
   * 
   * > Call [DescribeCACertificateList](https://help.aliyun.com/document_detail/465957.html) to query the unique identifiers of all CA certificates.
   * 
   * This parameter is required.
   * 
   * @example
   * 160ae6bb538d538c70c01f81dcf2****
   */
  identifier?: string;
  /**
   * @remarks
   * The operation to perform on the CA certificate. Set the value to **REVOKE**. This revokes the CA certificate and changes its status to **REVOKE**.
   * 
   * > This operation is supported only when the CA certificate is in the **ISSUE** state. Call [DescribeCACertificate](https://help.aliyun.com/document_detail/465954.html) to query the current status of the CA certificate.
   * 
   * @example
   * REVOKE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      identifier: 'Identifier',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      identifier: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

