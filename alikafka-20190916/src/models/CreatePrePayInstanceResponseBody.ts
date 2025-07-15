// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrePayInstanceResponseBodyData extends $dara.Model {
  /**
   * @example
   * alikafka_post-cn-xxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * 236972661xxxx
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

export class CreatePrePayInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: CreatePrePayInstanceResponseBodyData;
  /**
   * @example
   * operation success
   */
  message?: string;
  /**
   * @example
   * E57A8862-DF68-4055-8E55-B80CB4****
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreatePrePayInstanceResponseBodyData,
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

