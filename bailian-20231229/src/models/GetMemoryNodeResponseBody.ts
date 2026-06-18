// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemoryNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the memory fragment.
   * 
   * @example
   * 用户喜欢吃西红柿炒鸡蛋
   */
  content?: string;
  /**
   * @remarks
   * The long-term memory ID.
   * 
   * @example
   * 6bff4f317a14442fbc9f73d29dbd5fc3
   */
  memoryId?: string;
  /**
   * @remarks
   * The memory fragment ID.
   * 
   * @example
   * 68de06c95368463a8be4a84efc872cc5
   */
  memoryNodeId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8C56C7AF-6573-19CE-B018-E05E1EDCF4C5
   */
  requestId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * llm-us9hjmt32nysdm5v
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      memoryId: 'memoryId',
      memoryNodeId: 'memoryNodeId',
      requestId: 'requestId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      memoryId: 'string',
      memoryNodeId: 'string',
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

