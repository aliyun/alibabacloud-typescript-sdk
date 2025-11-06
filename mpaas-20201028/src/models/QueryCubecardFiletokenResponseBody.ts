// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCubecardFiletokenResponseBodyResultContentDataContent extends $dara.Model {
  /**
   * @example
   * LTAI5tFgfNzJFDn4Y4BhoRnc
   */
  accessid?: string;
  /**
   * @example
   * /home/ecs-assist-user/proof/alert
   */
  dir?: string;
  /**
   * @example
   * 1760583447
   */
  expire?: string;
  /**
   * @example
   * 172.23.129.55
   */
  host?: string;
  /**
   * @example
   * Permit
   */
  policy?: string;
  /**
   * @example
   * yKplu9LQwgKBTDhxp0YozAeCy9c=
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessid: 'Accessid',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessid: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCubecardFiletokenResponseBodyResultContentData extends $dara.Model {
  content?: QueryCubecardFiletokenResponseBodyResultContentDataContent;
  /**
   * @example
   * NONE
   */
  errorCode?: string;
  /**
   * @example
   * success
   */
  resultMsg?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      errorCode: 'ErrorCode',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: QueryCubecardFiletokenResponseBodyResultContentDataContent,
      errorCode: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCubecardFiletokenResponseBodyResultContent extends $dara.Model {
  data?: QueryCubecardFiletokenResponseBodyResultContentData;
  /**
   * @example
   * 11E66B29-9E5E-5C10-B64E-B5A0E0F26355
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryCubecardFiletokenResponseBodyResultContentData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCubecardFiletokenResponseBody extends $dara.Model {
  /**
   * @example
   * 11E66B29-9E5E-5C10-B64E-B5A0E0F26355
   */
  requestId?: string;
  /**
   * @example
   * OK
   */
  resultCode?: string;
  resultContent?: QueryCubecardFiletokenResponseBodyResultContent;
  /**
   * @example
   * success
   */
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: QueryCubecardFiletokenResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.resultContent && typeof (this.resultContent as any).validate === 'function') {
      (this.resultContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

