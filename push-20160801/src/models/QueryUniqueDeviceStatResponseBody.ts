// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUniqueDeviceStatResponseBodyAppDeviceStatsAppDeviceStat extends $dara.Model {
  /**
   * @example
   * 100
   */
  count?: number;
  /**
   * @example
   * 2016-07-25T00:00:00Z
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
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

export class QueryUniqueDeviceStatResponseBodyAppDeviceStats extends $dara.Model {
  appDeviceStat?: QueryUniqueDeviceStatResponseBodyAppDeviceStatsAppDeviceStat[];
  static names(): { [key: string]: string } {
    return {
      appDeviceStat: 'AppDeviceStat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDeviceStat: { 'type': 'array', 'itemType': QueryUniqueDeviceStatResponseBodyAppDeviceStatsAppDeviceStat },
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

export class QueryUniqueDeviceStatResponseBody extends $dara.Model {
  appDeviceStats?: QueryUniqueDeviceStatResponseBodyAppDeviceStats;
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
      appDeviceStats: QueryUniqueDeviceStatResponseBodyAppDeviceStats,
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

