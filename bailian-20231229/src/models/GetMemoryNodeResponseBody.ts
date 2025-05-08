// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemoryNodeResponseBody extends $dara.Model {
  content?: string;
  /**
   * @example
   * 6bff4f317a14442fbc9f73d29dbd5fc3
   */
  memoryId?: string;
  /**
   * @example
   * 68de06c95368463a8be4a84efc872cc5
   */
  memoryNodeId?: string;
  /**
   * @example
   * 8C56C7AF-6573-19CE-B018-E05E1EDCF4C5
   */
  requestId?: string;
  /**
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

