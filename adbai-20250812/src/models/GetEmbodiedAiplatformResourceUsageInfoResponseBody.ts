// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEmbodiedAIPlatformResourceUsageInfoResponseBodyAcuDetails extends $dara.Model {
  /**
   * @remarks
   * The number of ACUs for the EAP web server.
   * 
   * @example
   * 0
   */
  eapWebserverACUCount?: number;
  /**
   * @remarks
   * The number of ACUs for the Ray head node.
   * 
   * @example
   * 0
   */
  rayHeadACUCount?: number;
  /**
   * @remarks
   * The number of ACUs for the Ray worker node.
   * 
   * @example
   * 0
   */
  rayWorkerACUCount?: number;
  /**
   * @remarks
   * The total number of ACUs.
   * 
   * @example
   * 0
   */
  totalACUCount?: number;
  static names(): { [key: string]: string } {
    return {
      eapWebserverACUCount: 'EapWebserverACUCount',
      rayHeadACUCount: 'RayHeadACUCount',
      rayWorkerACUCount: 'RayWorkerACUCount',
      totalACUCount: 'TotalACUCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eapWebserverACUCount: 'number',
      rayHeadACUCount: 'number',
      rayWorkerACUCount: 'number',
      totalACUCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmbodiedAIPlatformResourceUsageInfoResponseBodyGpuDetails extends $dara.Model {
  /**
   * @remarks
   * The GPU allocation unit.
   * 
   * @example
   * 1
   */
  allocatedUnit?: number;
  /**
   * @remarks
   * The GPU model.
   * 
   * @example
   * ADB.MLLarge.2
   */
  gpuModel?: string;
  /**
   * @remarks
   * The current number of GPUs in use for this model.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      allocatedUnit: 'AllocatedUnit',
      gpuModel: 'GpuModel',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatedUnit: 'number',
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
   * @remarks
   * The inbound Internet traffic, in bytes.
   * 
   * @example
   * 0
   */
  totalBytesIn?: number;
  /**
   * @remarks
   * The outbound Internet traffic, in bytes.
   * 
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
   * @remarks
   * The NAS standard storage usage, in bytes.
   * 
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
   * @remarks
   * The OSS standard storage usage, in bytes.
   * 
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
  /**
   * @remarks
   * The NAS storage usage.
   */
  nas?: GetEmbodiedAIPlatformResourceUsageInfoResponseBodyStorageUsageNas;
  /**
   * @remarks
   * The OSS storage usage.
   */
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
  /**
   * @remarks
   * The number of ACUs for each component of the Embodied platform.
   */
  acuDetails?: GetEmbodiedAIPlatformResourceUsageInfoResponseBodyAcuDetails;
  /**
   * @remarks
   * The GPU usage.
   */
  gpuDetails?: GetEmbodiedAIPlatformResourceUsageInfoResponseBodyGpuDetails[];
  /**
   * @remarks
   * The maximum number of registered devices.
   * 
   * @example
   * 3
   */
  maxRegisteredDevices?: number;
  /**
   * @remarks
   * The number of registered devices.
   * 
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
  /**
   * @remarks
   * The network resource usage information.
   */
  slbTraffic?: GetEmbodiedAIPlatformResourceUsageInfoResponseBodySlbTraffic;
  /**
   * @remarks
   * The storage resource usage information.
   */
  storageUsage?: GetEmbodiedAIPlatformResourceUsageInfoResponseBodyStorageUsage;
  static names(): { [key: string]: string } {
    return {
      acuDetails: 'AcuDetails',
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
      acuDetails: GetEmbodiedAIPlatformResourceUsageInfoResponseBodyAcuDetails,
      gpuDetails: { 'type': 'array', 'itemType': GetEmbodiedAIPlatformResourceUsageInfoResponseBodyGpuDetails },
      maxRegisteredDevices: 'number',
      registeredDeviceCount: 'number',
      requestId: 'string',
      slbTraffic: GetEmbodiedAIPlatformResourceUsageInfoResponseBodySlbTraffic,
      storageUsage: GetEmbodiedAIPlatformResourceUsageInfoResponseBodyStorageUsage,
    };
  }

  validate() {
    if(this.acuDetails && typeof (this.acuDetails as any).validate === 'function') {
      (this.acuDetails as any).validate();
    }
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

