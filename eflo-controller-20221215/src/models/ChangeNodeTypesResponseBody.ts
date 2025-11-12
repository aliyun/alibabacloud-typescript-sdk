// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ChangeNodeTypesResponseBodyNodeResponse extends $dara.Model {
  /**
   * @example
   * PASSED
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * e01-in-067da4ca9c2
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeNodeTypesResponseBody extends $dara.Model {
  nodeResponse?: ChangeNodeTypesResponseBodyNodeResponse[];
  /**
   * @example
   * 887FA855-89F4-5DB3-B305-C5879EC480E6
   */
  requestId?: string;
  /**
   * @example
   * i158475611663639202234
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeResponse: 'NodeResponse',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeResponse: { 'type': 'array', 'itemType': ChangeNodeTypesResponseBodyNodeResponse },
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeResponse)) {
      $dara.Model.validateArray(this.nodeResponse);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

