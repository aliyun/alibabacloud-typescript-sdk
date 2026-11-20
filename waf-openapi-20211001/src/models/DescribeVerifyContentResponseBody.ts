// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyContentResponseBodyDnsContent extends $dara.Model {
  /**
   * @remarks
   * The host record.
   * 
   * @example
   * verification
   */
  RR?: string;
  /**
   * @remarks
   * The TXT record type.
   * 
   * @example
   * TXT
   */
  type?: string;
  /**
   * @remarks
   * The TXT record value.
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
   * The file download path.
   * 
   * @example
   * http://oss.xxx.com//xxx.html
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * xxx.html
   */
  fileName?: string;
  /**
   * @remarks
   * The primary domain name.
   * 
   * @example
   * aliyundemo.com
   */
  topDomain?: string;
  /**
   * @remarks
   * The file content.
   * 
   * @example
   * verify_0a246ca99d504ba08***
   */
  value?: string;
  /**
   * @remarks
   * The access path for file verification.
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
   * The DNS verification content.
   */
  dnsContent?: DescribeVerifyContentResponseBodyDnsContent;
  /**
   * @remarks
   * The file verification content.
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
   * The verification result. Valid values:
   * 
   * - **true**: Verification passed.
   * 
   * - **false**: Verification failed.
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

