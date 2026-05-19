// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEmbodiedAIPlatformRequestRayConfigWorkerGroups extends $dara.Model {
  /**
   * @example
   * 1
   */
  allocateUnit?: string;
  /**
   * @example
   * test
   */
  groupName?: string;
  /**
   * @example
   * 2
   */
  maxWorkerQuantity?: number;
  /**
   * @example
   * 1
   */
  minWorkerQuantity?: number;
  /**
   * @example
   * 100G
   */
  workerDiskCapacity?: string;
  /**
   * @example
   * xlarge
   */
  workerSpecName?: string;
  /**
   * @example
   * CPU
   */
  workerSpecType?: string;
  static names(): { [key: string]: string } {
    return {
      allocateUnit: 'AllocateUnit',
      groupName: 'GroupName',
      maxWorkerQuantity: 'MaxWorkerQuantity',
      minWorkerQuantity: 'MinWorkerQuantity',
      workerDiskCapacity: 'WorkerDiskCapacity',
      workerSpecName: 'WorkerSpecName',
      workerSpecType: 'WorkerSpecType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocateUnit: 'string',
      groupName: 'string',
      maxWorkerQuantity: 'number',
      minWorkerQuantity: 'number',
      workerDiskCapacity: 'string',
      workerSpecName: 'string',
      workerSpecType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEmbodiedAIPlatformRequestRayConfig extends $dara.Model {
  /**
   * @example
   * BASIC
   */
  category?: string;
  /**
   * @example
   * xlarge
   */
  headSpec?: string;
  workerGroups?: ModifyEmbodiedAIPlatformRequestRayConfigWorkerGroups[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      headSpec: 'HeadSpec',
      workerGroups: 'WorkerGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      headSpec: 'string',
      workerGroups: { 'type': 'array', 'itemType': ModifyEmbodiedAIPlatformRequestRayConfigWorkerGroups },
    };
  }

  validate() {
    if(Array.isArray(this.workerGroups)) {
      $dara.Model.validateArray(this.workerGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEmbodiedAIPlatformRequestRayTrainConfigGpuSpecs extends $dara.Model {
  /**
   * @example
   * "1"
   */
  allocateUnit?: string;
  /**
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * ADB.MLTensor.2
   */
  specName?: string;
  static names(): { [key: string]: string } {
    return {
      allocateUnit: 'AllocateUnit',
      count: 'Count',
      specName: 'SpecName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocateUnit: 'string',
      count: 'number',
      specName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEmbodiedAIPlatformRequestRayTrainConfigTerminalConfigAcrConfig extends $dara.Model {
  /**
   * @example
   * i-8vb32jdd306b50rodza7
   */
  instanceId?: string;
  namespaces?: string[];
  /**
   * @example
   * example-vpc.example-region.cr.aliyuncs.com
   */
  registry?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaces: 'Namespaces',
      registry: 'Registry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaces: { 'type': 'array', 'itemType': 'string' },
      registry: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.namespaces)) {
      $dara.Model.validateArray(this.namespaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEmbodiedAIPlatformRequestRayTrainConfigTerminalConfig extends $dara.Model {
  acrConfig?: ModifyEmbodiedAIPlatformRequestRayTrainConfigTerminalConfigAcrConfig;
  static names(): { [key: string]: string } {
    return {
      acrConfig: 'AcrConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrConfig: ModifyEmbodiedAIPlatformRequestRayTrainConfigTerminalConfigAcrConfig,
    };
  }

  validate() {
    if(this.acrConfig && typeof (this.acrConfig as any).validate === 'function') {
      (this.acrConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEmbodiedAIPlatformRequestRayTrainConfig extends $dara.Model {
  /**
   * @example
   * 10
   */
  cpuAcu?: number;
  gpuSpecs?: ModifyEmbodiedAIPlatformRequestRayTrainConfigGpuSpecs[];
  terminalConfig?: ModifyEmbodiedAIPlatformRequestRayTrainConfigTerminalConfig;
  static names(): { [key: string]: string } {
    return {
      cpuAcu: 'CpuAcu',
      gpuSpecs: 'GpuSpecs',
      terminalConfig: 'TerminalConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuAcu: 'number',
      gpuSpecs: { 'type': 'array', 'itemType': ModifyEmbodiedAIPlatformRequestRayTrainConfigGpuSpecs },
      terminalConfig: ModifyEmbodiedAIPlatformRequestRayTrainConfigTerminalConfig,
    };
  }

  validate() {
    if(Array.isArray(this.gpuSpecs)) {
      $dara.Model.validateArray(this.gpuSpecs);
    }
    if(this.terminalConfig && typeof (this.terminalConfig as any).validate === 'function') {
      (this.terminalConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEmbodiedAIPlatformRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  deviceCount?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eap_platform
   */
  platformName?: string;
  rayConfig?: ModifyEmbodiedAIPlatformRequestRayConfig;
  rayTrainConfig?: ModifyEmbodiedAIPlatformRequestRayTrainConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * large
   */
  webserverSpecName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      deviceCount: 'DeviceCount',
      platformName: 'PlatformName',
      rayConfig: 'RayConfig',
      rayTrainConfig: 'RayTrainConfig',
      regionId: 'RegionId',
      webserverSpecName: 'WebserverSpecName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      deviceCount: 'string',
      platformName: 'string',
      rayConfig: ModifyEmbodiedAIPlatformRequestRayConfig,
      rayTrainConfig: ModifyEmbodiedAIPlatformRequestRayTrainConfig,
      regionId: 'string',
      webserverSpecName: 'string',
    };
  }

  validate() {
    if(this.rayConfig && typeof (this.rayConfig as any).validate === 'function') {
      (this.rayConfig as any).validate();
    }
    if(this.rayTrainConfig && typeof (this.rayTrainConfig as any).validate === 'function') {
      (this.rayTrainConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

