// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryGbSubDeviceListRequest extends $dara.Model {
  deviceName?: string;
  iotId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  iotInstanceId?: string;
  pageSize?: number;
  pageStart?: number;
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      iotId: 'IotId',
      iotInstanceId: 'IotInstanceId',
      pageSize: 'PageSize',
      pageStart: 'PageStart',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      iotId: 'string',
      iotInstanceId: 'string',
      pageSize: 'number',
      pageStart: 'number',
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

