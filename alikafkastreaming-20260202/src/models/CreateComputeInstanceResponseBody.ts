// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComputeInstanceResponseBodyData extends $dara.Model {
  /**
   * @example
   * alikafka_streaming-cn-pe333xxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * 1234567890
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComputeInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: CreateComputeInstanceResponseBodyData;
  /**
   * @example
   * 062D8E8B-8D47-5DCC-BB12-5A1D93C3A66B
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
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateComputeInstanceResponseBodyData,
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

