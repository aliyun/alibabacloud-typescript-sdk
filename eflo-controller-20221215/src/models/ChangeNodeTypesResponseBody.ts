// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ChangeNodeTypesResponseBodyNodeResponse extends $dara.Model {
  /**
   * @remarks
   * The response code for the node.
   * 
   * @example
   * PASSED
   */
  code?: string;
  /**
   * @remarks
   * The response message for the node.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the node included in the response.
   * 
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
  /**
   * @remarks
   * The responses for the nodes.
   */
  nodeResponse?: ChangeNodeTypesResponseBodyNodeResponse[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 887FA855-89F4-5DB3-B305-C5879EC480E6
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID. A task ID is returned only if all nodes pass the precheck. If an exception occurs, this parameter is empty.
   * 
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

