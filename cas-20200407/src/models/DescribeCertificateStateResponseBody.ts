// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCertificateStateResponseBody extends $dara.Model {
  certId?: string;
  /**
   * @remarks
   * The content of the certificate in the PEM format. For more information about the PEM format and how to convert certificate formats, see [What formats are used for mainstream digital certificates?](https://help.aliyun.com/document_detail/42214.html)
   * 
   * >  This parameter is returned only when the value of the **Type** parameter is **certificate**. The value certificate indicates that the certificate is issued.
   * 
   * @example
   * ——BEGIN CERTIFICATE—— …… ——END CERTIFICATE——
   */
  certificate?: string;
  /**
   * @remarks
   * The content that you need to write to the newly created file when you use the file verification method.
   * 
   * >  This parameter is returned only when the value of the **Type** parameter is **domain_verify** and the value of the **ValidateType** parameter is **FILE**. The value domain_verify indicates that the verification of the domain name ownership is not complete, and the value FILE indicates that the file verification method is used.
   * 
   * @example
   * http://example.com/.well-known/pki-validation/fileauth.txt
   */
  content?: string;
  /**
   * @remarks
   * The domain name to be verified when you use the file verification method. You must connect to the DNS server of the domain name and create a file on the server. The file is specified by the **Uri** parameter.
   * 
   * >  This parameter is returned only when the value of the **Type** parameter is **domain_verify** and the value of the **ValidateType** parameter is **FILE**. The value domain_verify indicates that the verification of the domain name ownership is not complete, and the value FILE indicates that the file verification method is used.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The private key of the certificate in the PEM format. For more information about the PEM format and how to convert certificate formats, see [What formats are used for mainstream digital certificates?](https://help.aliyun.com/document_detail/42214.html)
   * 
   * >  This parameter is returned only when the value of the **Type** parameter is **certificate**. The value certificate indicates that the certificate is issued.
   * 
   * @example
   * ——BEGIN RSA PRIVATE KEY—— …… ——END RSA PRIVATE KEY——
   */
  privateKey?: string;
  /**
   * @remarks
   * The DNS record that you need to manage when you use the DNS verification method.
   * 
   * >  This parameter is returned only when the value of the **Type** parameter is **domain_verify** and the value of the **ValidateType** parameter is **DNS**. The value domain_verify indicates that the verification of the domain name ownership is not complete, and the value DNS indicates that the DNS verification method is used.
   * 
   * @example
   * _dnsauth
   */
  recordDomain?: string;
  /**
   * @remarks
   * The type of the DNS record that you need to add when you use the DNS verification method. Valid values:
   * 
   * *   **TXT**
   * *   **CNAME**
   * 
   * >  This parameter is returned only when the value of the **Type** parameter is **domain_verify** and the value of the **ValidateType** parameter is **DNS**. The value domain_verify indicates that the verification of the domain name ownership is not complete.
   * 
   * @example
   * TXT
   */
  recordType?: string;
  /**
   * @remarks
   * You need to add a TXT record to the DNS records only when you use the DNS verification method.
   * 
   * >  This parameter is returned only when the value of the **Type** parameter is **domain_verify** and the value of the **ValidateType** parameter is **DNS**. The value domain_verify indicates that the verification of the domain name ownership is not complete, and the value DNS indicates that the DNS verification method is used.
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
   * The status of the certificate application order. Valid values:
   * 
   * *   **domain_verify**: **pending review**, which indicates that you have not completed the verification of the domain name ownership after you submit the certificate application.
   *      >After you submit a certificate application, you must manually complete the verification of the domain name ownership. The CA reviews the certificate application only after the verification is complete. If you have not completed the verification of the domain name ownership, you can complete the verification based on the data returned by this operation.
   * 
   * *   **process**: **being reviewed**, which indicates that the certificate application is being reviewed by the CA.
   * 
   * *   **verify_fail**: **review failed**, which indicates that the certificate application failed to be reviewed.
   *     >  If a certificate application fails to be reviewed, the information that you specified in the certificate application may be incorrect. We recommend that you call the [DeleteCertificateRequest](https://help.aliyun.com/document_detail/164109.html) operation to delete the certificate application order and resubmit a certificate application. After the order is deleted, the quota that is consumed for the order is released.
   * 
   * *   **certificate**: **issued**, which indicates that the certificate is issued.
   * 
   * *   **payed**: **pending application**, which indicates that you have not submitted a certificate application.
   * 
   * *   **unknow**: The status is **unknown**.
   * 
   * @example
   * domain_verify
   */
  type?: string;
  /**
   * @remarks
   * The file that you need to create on the DNS server when you use the file verification method. **The value of this parameter contains the file path and file name.**
   * 
   * >  This parameter is returned only when the value of the **Type** parameter is **domain_verify** and the value of the **ValidateType** parameter is **FILE**. The value domain_verify indicates that the verification of the domain name ownership is not complete, and the value FILE indicates that the file verification method is used.
   * 
   * @example
   * /.well-known/pki-validation/fileauth.txt
   */
  uri?: string;
  /**
   * @remarks
   * The verification method of the domain name ownership. Valid values:
   * 
   * *   **DNS**: DNS verification. If you use this method, you must add a TXT record to the DNS records of the domain name in the management platform of the domain name.
   * *   **FILE**: file verification. If you use this method, you must create a specified file on the DNS server.
   * 
   * >  This parameter is returned only when the value of the **Type** parameter is **domain_verify**. The value domain_verify indicates that the verification of the domain name ownership is not complete.
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

