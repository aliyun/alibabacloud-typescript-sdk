// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHeadersResponseBodyCustomHeader extends $dara.Model {
  /**
   * @remarks
   * The domain name of the website.
   * 
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The header of the response.
   * 
   * @example
   * {"X-Forwarded-ClientSrcPort":"","header1":"hLeLele"}
   */
  headers?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      headers: 'Headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      headers: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHeadersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the custom header.
   */
  customHeader?: DescribeHeadersResponseBodyCustomHeader;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 48BC7BA5-69BE-5C31-A080-AFF2431AE48D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customHeader: 'CustomHeader',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customHeader: DescribeHeadersResponseBodyCustomHeader,
      requestId: 'string',
    };
  }

  validate() {
    if(this.customHeader && typeof (this.customHeader as any).validate === 'function') {
      (this.customHeader as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

