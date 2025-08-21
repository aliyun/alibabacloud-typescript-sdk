// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDeviceStatResponseBodyAppDeviceStatsAppDeviceStat extends $dara.Model {
  /**
   * @example
   * 100
   */
  count?: number;
  /**
   * @example
   * iOS
   */
  deviceType?: string;
  /**
   * @example
   * 2016-07-28T16:00:00Z
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      deviceType: 'DeviceType',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      deviceType: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatResponseBodyAppDeviceStats extends $dara.Model {
  appDeviceStat?: QueryDeviceStatResponseBodyAppDeviceStatsAppDeviceStat[];
  static names(): { [key: string]: string } {
    return {
      appDeviceStat: 'AppDeviceStat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDeviceStat: { 'type': 'array', 'itemType': QueryDeviceStatResponseBodyAppDeviceStatsAppDeviceStat },
    };
  }

  validate() {
    if(Array.isArray(this.appDeviceStat)) {
      $dara.Model.validateArray(this.appDeviceStat);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatResponseBody extends $dara.Model {
  appDeviceStats?: QueryDeviceStatResponseBodyAppDeviceStats;
  /**
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appDeviceStats: 'AppDeviceStats',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDeviceStats: QueryDeviceStatResponseBodyAppDeviceStats,
      requestId: 'string',
    };
  }

  validate() {
    if(this.appDeviceStats && typeof (this.appDeviceStats as any).validate === 'function') {
      (this.appDeviceStats as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

