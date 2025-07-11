// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterResponseBodyData extends $dara.Model {
  /**
   * @example
   * xxljob-b21969c2309
   */
  clusterId?: string;
  /**
   * @example
   * 229317760970086
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
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

export class CreateClusterResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: CreateClusterResponseBodyData;
  /**
   * @example
   * INVALID_PARAMETER
   */
  errorCode?: string;
  /**
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * B8733786-C045-59F1-8D79-99A52863F62D
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
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateClusterResponseBodyData,
      errorCode: 'string',
      message: 'string',
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

