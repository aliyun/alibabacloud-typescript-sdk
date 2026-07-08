// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCertificateStateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The certificate ID.
   * 
   * > This parameter is returned when the certificate is issued.
   * 
   * @example
   * 111111
   */
  certId?: string;
  /**
   * @remarks
   * The certificate content (in PEM format). For more information about the PEM format and how to convert the format of a certificate, see [What are the formats of mainstream digital certificates?](https://help.aliyun.com/document_detail/42214.html).
   * 
   * > This parameter is returned only when **Type** is set to **certificate** (indicating that the certificate has been issued).
   * 
   * @example
   * -----BEGIN CERTIFICATE----- …… -----END CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @remarks
   * The content that you need to write to the newly created file when you use the file validation method for domain validation.
   * 
   * > This parameter is returned only when **Type** is set to **domain_verify** (indicating the domain validation stage) and **ValidateType** is set to **FILE** (indicating the file validation method).
   * 
   * @example
   * http://example.com/.well-known/pki-validation/fileauth.txt
   */
  content?: string;
  /**
   * @remarks
   * The domain name to be validated when you use the file validation method for domain validation. You need to connect to the server corresponding to this domain name and create the specified file (i.e., **Uri**) on the server.
   * 
   * > This parameter is returned only when **Type** is set to **domain_verify** (indicating the domain validation stage) and **ValidateType** is set to **FILE** (indicating the file validation method).
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The content of the certificate private key (in PEM format). For more information about the PEM format and how to convert the format of a certificate, see [What are the formats of mainstream digital certificates?](https://help.aliyun.com/document_detail/42214.html).
   * 
   * > This parameter is returned only when **Type** is set to **certificate** (indicating that the certificate has been issued).
   * 
   * @example
   * -----BEGIN RSA PRIVATE KEY-----…… -----END RSA PRIVATE KEY-----
   */
  privateKey?: string;
  /**
   * @remarks
   * The host record that you need to operate when you use the DNS validation method for domain validation.
   * 
   * > This parameter is returned only when **Type** is set to **domain_verify** (indicating the domain validation stage) and **ValidateType** is set to **DNS** (indicating the DNS validation method).
   * 
   * @example
   * _dnsauth
   */
  recordDomain?: string;
  /**
   * @remarks
   * The type of DNS record that you need to add when you use the DNS validation method for domain validation. Valid values:
   * 
   * - **TXT**: text record.
   * 
   * - **CNAME**: alias record.
   * 
   * > This parameter is returned only when **Type** is set to **domain_verify** (indicating the domain validation stage) and **ValidateType** is set to **DNS** (indicating the DNS validation method).
   * 
   * @example
   * TXT
   */
  recordType?: string;
  /**
   * @remarks
   * The record value that you need to add when you use the DNS validation method for domain validation.
   * 
   * > This parameter is returned only when **Type** is set to **domain_verify** (indicating the domain validation stage) and **ValidateType** is set to **DNS** (indicating the DNS validation method).
   * 
   * @example
   * 20200420000000223erigacv46uhaubchcm0o7spxi7i2isvjq59mlx9lucnkqcy
   */
  recordValue?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 082FAB35-6AB9-4FD5-8750-D36673548E76
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the certificate request order. Valid values:
   * 
   * - **domain_verify**: **Pending validation**, which indicates that you have not completed domain validation after submitting the certificate request.
   * 
   *   > After you submit a certificate request, you must manually complete domain ownership validation before the certificate request can enter the review stage. If you have not completed domain validation, you can refer to the response parameters of this operation to complete domain validation.
   * 
   * - **process**: **Under review**, which indicates that the certificate request is being reviewed by the CA center.
   * 
   * - **verify_fail**: **Review failed**, which indicates that the certificate request failed the review.
   * 
   *   > The review may fail because the certificate request information you submitted is incorrect. We recommend that you call [DeleteCertificateRequest](https://help.aliyun.com/document_detail/455294.html) to delete the order that failed the review (deleted orders do not consume certificate resource plan quota) and submit a new certificate request.
   * 
   * - **certificate**: **Issued**, which indicates that the certificate has been issued.
   * 
   * - **payed**: **Pending request**, which indicates that the certificate is pending request.
   * 
   * - **unknow**: **Unknown status**.
   * 
   * @example
   * domain_verify
   */
  type?: string;
  /**
   * @remarks
   * The file that you need to create on the domain server when you use the file validation method for domain validation. **Uri** includes the file path and name.
   * 
   * > This parameter is returned only when **Type** is set to **domain_verify** (indicating the domain validation stage) and **ValidateType** is set to **FILE** (indicating the file validation method).
   * 
   * @example
   * /.well-known/pki-validation/fileauth.txt
   */
  uri?: string;
  /**
   * @remarks
   * The domain validation method selected when submitting the certificate request. Valid values:
   * 
   * - **DNS**: DNS validation. This method validates domain ownership by adding the specified DNS record to the domain on the DNS management platform.
   * 
   * - **FILE**: file validation. This method validates domain ownership by creating the specified file on the domain server.
   * 
   * > This parameter is returned only when **Type** is set to **domain_verify** (indicating the domain validation stage).
   * 
   * @example
   * FILE
   */
  validateType?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      certificate: 'Certificate',
      content: 'Content',
      domain: 'Domain',
      privateKey: 'PrivateKey',
      recordDomain: 'RecordDomain',
      recordType: 'RecordType',
      recordValue: 'RecordValue',
      requestId: 'RequestId',
      type: 'Type',
      uri: 'Uri',
      validateType: 'ValidateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      certificate: 'string',
      content: 'string',
      domain: 'string',
      privateKey: 'string',
      recordDomain: 'string',
      recordType: 'string',
      recordValue: 'string',
      requestId: 'string',
      type: 'string',
      uri: 'string',
      validateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

