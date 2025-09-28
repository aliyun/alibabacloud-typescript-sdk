// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifySchemeResponseBodySchemeQueryResultDTO extends $dara.Model {
  /**
   * @remarks
   * The key generated when you create a service in the console.
   * 
   * @example
   * ZDMARqPkyQzWVJjB/sB/+fCp5TA4lNsRnY7rEC+HfGsOIOk1Brj8UyXFW2RBYIWqLieCSo8ZypEaEj+h9rLd3FgpXAjGYDfmOperod6jPUUwFHhBObxK+HuKVoi2jOqN7aDOlyPyGcATyq3BDdlf922JmnFLT8Hvnu4qgzzCZk0LXWTb0XVPnm5/fHUGHEA2Q+aTrGkaWcHjmTDqQ7BtvrAIIcJJkCJu4i1aeU++/0EzGWap4mcb2VhKROBs****
   */
  appEncryptInfo?: string;
  static names(): { [key: string]: string } {
    return {
      appEncryptInfo: 'AppEncryptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEncryptInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySchemeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. OK indicates that the request is successful. For more information about other error codes, see [API response codes](https://help.aliyun.com/document_detail/85198.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0C5380A7-2032-5F7D-9614-1BF8B54D16CB
   */
  requestId?: string;
  /**
   * @remarks
   * The response parameters.
   */
  schemeQueryResultDTO?: DescribeVerifySchemeResponseBodySchemeQueryResultDTO;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      schemeQueryResultDTO: 'SchemeQueryResultDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      schemeQueryResultDTO: DescribeVerifySchemeResponseBodySchemeQueryResultDTO,
    };
  }

  validate() {
    if(this.schemeQueryResultDTO && typeof (this.schemeQueryResultDTO as any).validate === 'function') {
      (this.schemeQueryResultDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

