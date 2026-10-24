// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAgentResourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The compute group ID.
   * 
   * @example
   * ng-5e2ba600fee3****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 241526000650XXX
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      nodeGroupId: 'NodeGroupId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeGroupId: 'string',
      orderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateAgentResourceResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
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
   * The request ID.
   * 
   * @example
   * B67D142D-D54E-184F-A306-22BDC01B2XXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateAgentResourceResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

