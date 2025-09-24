// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourcePackageResponseBodyData extends $dara.Model {
  /**
   * @example
   * OSSBAG-cn-****s
   */
  instanceId?: string;
  /**
   * @example
   * 202407022550621
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

export class CreateResourcePackageResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: CreateResourcePackageResponseBodyData;
  /**
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @example
   * 202407022550621
   */
  orderId?: number;
  /**
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
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
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateResourcePackageResponseBodyData,
      message: 'string',
      orderId: 'number',
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

