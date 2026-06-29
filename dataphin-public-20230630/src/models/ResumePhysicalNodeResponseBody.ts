// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumePhysicalNodeResponseBodyNodeOperateResultList extends $dara.Model {
  /**
   * @remarks
   * Error message returned when the operation fails.
   * 
   * @example
   * xx
   */
  errorMessage?: string;
  /**
   * @remarks
   * Node ID.
   * 
   * @example
   * n_123456
   */
  nodeId?: string;
  /**
   * @remarks
   * Operation result.
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

export class ResumePhysicalNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code. A value of OK indicates a successful request.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Results of the node resume scheduling operation.
   */
  nodeOperateResultList?: ResumePhysicalNodeResponseBodyNodeOperateResultList[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the request was successful.
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
      nodeOperateResultList: { 'type': 'array', 'itemType': ResumePhysicalNodeResponseBodyNodeOperateResultList },
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

