// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PatchMemoryConfigResponseBodyData extends $dara.Model {
  appId?: string;
  autoUpdate?: boolean;
  expirationTime?: number;
  prompt?: string;
  threshold?: number;
  topK?: number;
  userDefinedId?: string;
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
  code?: string;
  data?: PatchMemoryConfigResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

