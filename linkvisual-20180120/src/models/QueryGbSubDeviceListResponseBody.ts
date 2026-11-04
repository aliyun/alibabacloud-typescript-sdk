// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryGbSubDeviceListResponseBodyDataGbSubDeviceList extends $dara.Model {
  deviceEnable?: number;
  deviceId?: string;
  deviceName?: string;
  iotId?: string;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceEnable: 'DeviceEnable',
      deviceId: 'DeviceId',
      deviceName: 'DeviceName',
      iotId: 'IotId',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceEnable: 'number',
      deviceId: 'string',
      deviceName: 'string',
      iotId: 'string',
      productKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGbSubDeviceListResponseBodyData extends $dara.Model {
  gbSubDeviceList?: QueryGbSubDeviceListResponseBodyDataGbSubDeviceList[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      gbSubDeviceList: 'GbSubDeviceList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gbSubDeviceList: { 'type': 'array', 'itemType': QueryGbSubDeviceListResponseBodyDataGbSubDeviceList },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.gbSubDeviceList)) {
      $dara.Model.validateArray(this.gbSubDeviceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryGbSubDeviceListResponseBody extends $dara.Model {
  code?: string;
  data?: QueryGbSubDeviceListResponseBodyData;
  errorMessage?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryGbSubDeviceListResponseBodyData,
      errorMessage: 'string',
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

