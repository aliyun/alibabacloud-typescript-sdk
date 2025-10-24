// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyContentResponseBodyDnsContent extends $dara.Model {
  /**
   * @example
   * verification
   */
  RR?: string;
  /**
   * @example
   * TXT
   */
  type?: string;
  /**
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
   * @example
   * http://oss.xxx.com//xxx.html
   */
  downloadUrl?: string;
  /**
   * @example
   * xxx.html
   */
  fileName?: string;
  /**
   * @example
   * aliyundemo.com
   */
  topDomain?: string;
  /**
   * @example
   * verify_0a246ca99d504ba08***
   */
  value?: string;
  /**
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
  dnsContent?: DescribeVerifyContentResponseBodyDnsContent;
  fileContent?: DescribeVerifyContentResponseBodyFileContent;
  /**
   * @example
   * D7861F61-5B61-46CE-A47C-***
   */
  requestId?: string;
  /**
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

