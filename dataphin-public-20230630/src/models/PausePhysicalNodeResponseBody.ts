// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PausePhysicalNodeResponseBodyNodeOperateResultList extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the operation fails.
   * 
   * @example
   * xx
   */
  errorMessage?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * n_123456
   */
  nodeId?: string;
  /**
   * @remarks
   * The operation result.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      nodeId: 'NodeId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      nodeId: 'string',
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

export class PausePhysicalNodeResponseBody extends $dara.Model {
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
   * The results of the pause scheduling operations on the nodes.
   */
  nodeOperateResultList?: PausePhysicalNodeResponseBodyNodeOperateResultList[];
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
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      nodeOperateResultList: 'NodeOperateResultList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      nodeOperateResultList: { 'type': 'array', 'itemType': PausePhysicalNodeResponseBodyNodeOperateResultList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.nodeOperateResultList)) {
      $dara.Model.validateArray(this.nodeOperateResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

