// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemoryNodesResponseBodyMemoryNodes extends $dara.Model {
  content?: string;
  /**
   * @example
   * 68de06c95368463a8be4a84efc872cc5
   */
  memoryNodeId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      memoryNodeId: 'memoryNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      memoryNodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

