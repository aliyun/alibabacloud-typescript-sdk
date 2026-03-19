// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskInstanceRelationResponseBodyNodeListNode extends $dara.Model {
  businessTime?: string;
  endTime?: string;
  executeTime?: number;
  id?: number;
  message?: string;
  nodeId?: number;
  nodeName?: string;
  nodeType?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      businessTime: 'BusinessTime',
      endTime: 'EndTime',
      executeTime: 'ExecuteTime',
      id: 'Id',
      message: 'Message',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeType: 'NodeType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessTime: 'string',
      endTime: 'string',
      executeTime: 'number',
      id: 'number',
      message: 'string',
      nodeId: 'number',
      nodeName: 'string',
      nodeType: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskInstanceRelationResponseBodyNodeList extends $dara.Model {
  node?: GetTaskInstanceRelationResponseBodyNodeListNode[];
  static names(): { [key: string]: string } {
    return {
      node: 'Node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      node: { 'type': 'array', 'itemType': GetTaskInstanceRelationResponseBodyNodeListNode },
    };
  }

  validate() {
    if(Array.isArray(this.node)) {
      $dara.Model.validateArray(this.node);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskInstanceRelationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  nodeList?: GetTaskInstanceRelationResponseBodyNodeList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 028BF827-3801-5869-8548-F4A039256304
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: The request is successful.
   * *   **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      nodeList: 'NodeList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      nodeList: GetTaskInstanceRelationResponseBodyNodeList,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.nodeList && typeof (this.nodeList as any).validate === 'function') {
      (this.nodeList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

