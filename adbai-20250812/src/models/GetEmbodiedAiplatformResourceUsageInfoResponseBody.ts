// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEmbodiedAIPlatformResourceUsageInfoResponseBodyGpuDetails extends $dara.Model {
  /**
   * @example
   * ADB.MLLarge.2
   */
  gpuModel?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      gpuModel: 'GpuModel',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpuModel: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmbodiedAIPlatformResourceUsageInfoResponseBodySlbTraffic extends $dara.Model {
  /**
   * @example
   * 0
   */
  totalBytesIn?: number;
  /**
   * @example
   * 0
   */
  totalBytesOut?: number;
  static names(): { [key: string]: string } {
    return {
      totalBytesIn: 'TotalBytesIn',
      totalBytesOut: 'TotalBytesOut',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalBytesIn: 'number',
      totalBytesOut: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmbodiedAIPlatformResourceUsageInfoResponseBodyStorageUsageNas extends $dara.Model {
  /**
   * @example
   * 0
   */
  meteredSize?: number;
  static names(): { [key: string]: string } {
    return {
      meteredSize: 'MeteredSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meteredSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmbodiedAIPlatformResourceUsageInfoResponseBodyStorageUsageOss extends $dara.Model {
  /**
   * @example
   * 0
   */
  standardStorageSize?: number;
  static names(): { [key: string]: string } {
    return {
      standardStorageSize: 'StandardStorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      standardStorageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmbodiedAIPlatformResourceUsageInfoResponseBodyStorageUsage extends $dara.Model {
  nas?: GetEmbodiedAIPlatformResourceUsageInfoResponseBodyStorageUsageNas;
  oss?: GetEmbodiedAIPlatformResourceUsageInfoResponseBodyStorageUsageOss;
  static names(): { [key: string]: string } {
    return {
      nas: 'Nas',
      oss: 'Oss',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nas: GetEmbodiedAIPlatformResourceUsageInfoResponseBodyStorageUsageNas,
      oss: GetEmbodiedAIPlatformResourceUsageInfoResponseBodyStorageUsageOss,
    };
  }

  validate() {
    if(this.nas && typeof (this.nas as any).validate === 'function') {
      (this.nas as any).validate();
    }
    if(this.oss && typeof (this.oss as any).validate === 'function') {
      (this.oss as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmbodiedAIPlatformResourceUsageInfoResponseBody extends $dara.Model {
  gpuDetails?: GetEmbodiedAIPlatformResourceUsageInfoResponseBodyGpuDetails[];
  /**
   * @example
   * 3
   */
  maxRegisteredDevices?: number;
  /**
   * @example
   * 1
   */
  registeredDeviceCount?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B47EED99-BFA5-529D-8D85-A6642421D390
   */
  requestId?: string;
  slbTraffic?: GetEmbodiedAIPlatformResourceUsageInfoResponseBodySlbTraffic;
  storageUsage?: GetEmbodiedAIPlatformResourceUsageInfoResponseBodyStorageUsage;
  static names(): { [key: string]: string } {
    return {
      gpuDetails: 'GpuDetails',
      maxRegisteredDevices: 'MaxRegisteredDevices',
      registeredDeviceCount: 'RegisteredDeviceCount',
      requestId: 'RequestId',
      slbTraffic: 'SlbTraffic',
      storageUsage: 'StorageUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpuDetails: { 'type': 'array', 'itemType': GetEmbodiedAIPlatformResourceUsageInfoResponseBodyGpuDetails },
      maxRegisteredDevices: 'number',
      registeredDeviceCount: 'number',
      requestId: 'string',
      slbTraffic: GetEmbodiedAIPlatformResourceUsageInfoResponseBodySlbTraffic,
      storageUsage: GetEmbodiedAIPlatformResourceUsageInfoResponseBodyStorageUsage,
    };
  }

  validate() {
    if(Array.isArray(this.gpuDetails)) {
      $dara.Model.validateArray(this.gpuDetails);
    }
    if(this.slbTraffic && typeof (this.slbTraffic as any).validate === 'function') {
      (this.slbTraffic as any).validate();
    }
    if(this.storageUsage && typeof (this.storageUsage as any).validate === 'function') {
      (this.storageUsage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

