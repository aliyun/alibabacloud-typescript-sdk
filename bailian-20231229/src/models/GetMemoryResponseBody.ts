// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the long-term memory.
   * 
   * @example
   * 我的大模型应用$APP_ID关于A用户的长期记忆体
   */
  description?: string;
  /**
   * @remarks
   * The ID of the long-term memory.
   * 
   * @example
   * 6bff4f317a14442fbc9f73d29dbdxxxx
   */
  memoryId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6a71f2d9-f1c9-913b-818b-11402910xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the long-term memory belongs.
   * 
   * @example
   * llm-3z7uw7fwz0vexxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      memoryId: 'memoryId',
      requestId: 'requestId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      memoryId: 'string',
      requestId: 'string',
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

