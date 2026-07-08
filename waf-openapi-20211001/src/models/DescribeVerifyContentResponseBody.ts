// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyContentResponseBodyDnsContent extends $dara.Model {
  /**
   * @remarks
   * The host record of the DNS TXT record used for domain ownership verification.
   * 
   * @example
   * verification
   */
  RR?: string;
  /**
   * @remarks
   * The type of the DNS record used for verification.
   * 
   * @example
   * TXT
   */
  type?: string;
  /**
   * @remarks
   * The value of the DNS TXT record used for verification.
   * 
   * @example
   * verify_0a246ca99d504ba087472d***
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      RR: 'RR',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      RR: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyContentResponseBodyFileContent extends $dara.Model {
  /**
   * @remarks
   * The download URL of the verification file.
   * 
   * @example
   * http://oss.xxx.com//xxx.html
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The name of the verification file.
   * 
   * @example
   * xxx.html
   */
  fileName?: string;
  /**
   * @remarks
   * The root domain of the domain name to be verified.
   * 
   * @example
   * aliyundemo.com
   */
  topDomain?: string;
  /**
   * @remarks
   * The content of the verification file.
   * 
   * @example
   * verify_0a246ca99d504ba08***
   */
  value?: string;
  /**
   * @remarks
   * The URL that is used to access the verification file.
   * 
   * @example
   * http://xxx.xxx.com//xxx.html
   */
  verifyPath?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      fileName: 'FileName',
      topDomain: 'TopDomain',
      value: 'Value',
      verifyPath: 'VerifyPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      fileName: 'string',
      topDomain: 'string',
      value: 'string',
      verifyPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyContentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The DNS-based verification content, including the TXT record details.
   */
  dnsContent?: DescribeVerifyContentResponseBodyDnsContent;
  /**
   * @remarks
   * The file-based verification content, including the file name, path, and download URL.
   */
  fileContent?: DescribeVerifyContentResponseBodyFileContent;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the domain ownership verification is successful.
   * 
   * @example
   * true
   */
  verifyResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      dnsContent: 'DnsContent',
      fileContent: 'FileContent',
      requestId: 'RequestId',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsContent: DescribeVerifyContentResponseBodyDnsContent,
      fileContent: DescribeVerifyContentResponseBodyFileContent,
      requestId: 'string',
      verifyResult: 'boolean',
    };
  }

  validate() {
    if(this.dnsContent && typeof (this.dnsContent as any).validate === 'function') {
      (this.dnsContent as any).validate();
    }
    if(this.fileContent && typeof (this.fileContent as any).validate === 'function') {
      (this.fileContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

