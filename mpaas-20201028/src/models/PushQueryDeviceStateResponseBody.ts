// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushQueryDeviceStateResponseBodyData extends $dara.Model {
  /**
   * @example
   * ad-000f18w8vmqtzhvbopge-854
   */
  deliveryToken?: string;
  /**
   * @example
   * ad-000f18w8vmqtzhvbopge-854
   */
  deviceId?: string;
  /**
   * @example
   * miui
   */
  manufacturer?: string;
  /**
   * @example
   * android
   */
  platform?: string;
  /**
   * @example
   * ONLINE
   */
  statue?: string;
  /**
   * @example
   * IQAAAACy0f7tAABYiMwLEENtr0TKYJEsv7wyu4Ubt9XXwTJAlknnCb1LAzB3wJvoZIcT_nJdaMhEoXJaqQrObAGHLGoU1GOexlTcLWzja-0HfGHKBw
   */
  thirdToken?: string;
  /**
   * @example
   * test_user
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryToken: 'DeliveryToken',
      deviceId: 'DeviceId',
      manufacturer: 'Manufacturer',
      platform: 'Platform',
      statue: 'Statue',
      thirdToken: 'ThirdToken',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryToken: 'string',
      deviceId: 'string',
      manufacturer: 'string',
      platform: 'string',
      statue: 'string',
      thirdToken: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushQueryDeviceStateResponseBody extends $dara.Model {
  /**
   * @example
   * 100
   */
  code?: string;
  data?: PushQueryDeviceStateResponseBodyData;
  /**
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 11E66B29-9E5E-5C10-B64E-B5A0E0F26355
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
      code: 'string',
      data: PushQueryDeviceStateResponseBodyData,
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

