// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMemoryConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * mm_bfaf7e110b6d4359977d1686a3f8
   */
  appId?: string;
  /**
   * @example
   * true
   */
  autoUpdate?: boolean;
  /**
   * @example
   * 30
   */
  expirationTime?: number;
  prompt?: string;
  /**
   * @example
   * 0.03
   */
  threshold?: number;
  /**
   * @example
   * 10
   */
  topK?: number;
  /**
   * @example
   * we4m6373
   */
  userDefinedId?: string;
  /**
   * @example
   * llm-956eawe4m6373633
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      autoUpdate: 'AutoUpdate',
      expirationTime: 'ExpirationTime',
      prompt: 'Prompt',
      threshold: 'Threshold',
      topK: 'TopK',
      userDefinedId: 'UserDefinedId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      autoUpdate: 'boolean',
      expirationTime: 'number',
      prompt: 'string',
      threshold: 'number',
      topK: 'number',
      userDefinedId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMemoryConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: QueryMemoryConfigResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * B075711B-7857-5BC3-A953-F04B1755EF67
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryMemoryConfigResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

