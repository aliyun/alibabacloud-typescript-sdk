// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushQueryDeviceStateResponseBodyData extends $dara.Model {
  deliveryToken?: string;
  deviceId?: string;
  manufacturer?: string;
  platform?: string;
  statue?: string;
  thirdToken?: string;
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
  accessDeniedDetail?: string;
  code?: string;
  data?: PushQueryDeviceStateResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
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

