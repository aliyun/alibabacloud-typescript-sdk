// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePostPayInstanceResponseBodyData extends $dara.Model {
  /**
   * @example
   * alikafka_pre-cn-pe333xxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * 236972661580636
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

export class CreatePostPayInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: CreatePostPayInstanceResponseBodyData;
  /**
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @example
   * ABA4A7FD-E10F-45C7-9774-A5236015A***
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
      data: CreatePostPayInstanceResponseBodyData,
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

