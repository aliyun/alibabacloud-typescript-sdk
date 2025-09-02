// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesByBaselineResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 1234
   */
  nodeId?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * Node name
   */
  nodeName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the node owner.
   * 
   * @example
   * 9527952****
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the workspace to which the node belongs.
   * 
   * @example
   * 1234
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      owner: 'Owner',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'number',
      nodeName: 'string',
      owner: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByBaselineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The nodes in the baseline.
   */
  data?: ListNodesByBaselineResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 1031203110005
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified parameters are invalid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 0000-ABCD-E****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListNodesByBaselineResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

