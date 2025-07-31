// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PausePhysicalNodeResponseBodyNodeOperateResultList extends $dara.Model {
  /**
   * @example
   * xx
   */
  errorMessage?: string;
  /**
   * @example
   * n_123456
   */
  nodeId?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  nodeOperateResultList?: PausePhysicalNodeResponseBodyNodeOperateResultList[];
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
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

