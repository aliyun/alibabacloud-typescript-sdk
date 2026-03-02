// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PatchMemoryConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1020d93c-9f17-4a39-9fe8-50b1fb1198d7
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
   * 3
   */
  topK?: number;
  /**
   * @example
   * 4a39-9fe8-50b1fb1
   */
  userDefinedId?: string;
  /**
   * @example
   * llm-ycc5m37pi2if9nwu
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

export class PatchMemoryConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: PatchMemoryConfigResponseBodyData;
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
   * 82296D89-6895-574B-8AA1-64959957CB41
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
      data: PatchMemoryConfigResponseBodyData,
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

