// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNodeOpsOwnerResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The failure reason. This value is empty if the operation was successful.
   * 
   * @example
   * test
   */
  errorInfo?: string;
  /**
   * @remarks
   * The node ID. This corresponds to the Id in the NodeIdList request parameter.
   * 
   * @example
   * n_8198365584737107968
   */
  id?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * demo_node
   */
  name?: string;
  /**
   * @remarks
   * The node source type.
   * 
   * @example
   * DATA_PROCESS
   */
  nodeFromType?: string;
  /**
   * @remarks
   * The change result status for the node.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorInfo: 'ErrorInfo',
      id: 'Id',
      name: 'Name',
      nodeFromType: 'NodeFromType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorInfo: 'string',
      id: 'string',
      name: 'string',
      nodeFromType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodeOpsOwnerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The list of per-node operation results.
   */
  data?: UpdateNodeOpsOwnerResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: { 'type': 'array', 'itemType': UpdateNodeOpsOwnerResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

