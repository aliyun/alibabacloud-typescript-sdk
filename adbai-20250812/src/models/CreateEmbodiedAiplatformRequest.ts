// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEmbodiedAIPlatformRequestRayConfigWorkerGroups extends $dara.Model {
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

export class CreateEmbodiedAIPlatformRequestRayConfig extends $dara.Model {
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
  workerGroups?: CreateEmbodiedAIPlatformRequestRayConfigWorkerGroups[];
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
      workerGroups: { 'type': 'array', 'itemType': CreateEmbodiedAIPlatformRequestRayConfigWorkerGroups },
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

export class CreateEmbodiedAIPlatformRequestRayTrainConfigGpuSpecs extends $dara.Model {
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
   * ADB.MLGrand.4
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

export class CreateEmbodiedAIPlatformRequestRayTrainConfigTerminalConfigAcrConfig extends $dara.Model {
  /**
   * @example
   * cri-***
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

export class CreateEmbodiedAIPlatformRequestRayTrainConfigTerminalConfig extends $dara.Model {
  acrConfig?: CreateEmbodiedAIPlatformRequestRayTrainConfigTerminalConfigAcrConfig;
  static names(): { [key: string]: string } {
    return {
      acrConfig: 'AcrConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrConfig: CreateEmbodiedAIPlatformRequestRayTrainConfigTerminalConfigAcrConfig,
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

export class CreateEmbodiedAIPlatformRequestRayTrainConfig extends $dara.Model {
  cpuAcu?: number;
  gpuSpecs?: CreateEmbodiedAIPlatformRequestRayTrainConfigGpuSpecs[];
  terminalConfig?: CreateEmbodiedAIPlatformRequestRayTrainConfigTerminalConfig;
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
      gpuSpecs: { 'type': 'array', 'itemType': CreateEmbodiedAIPlatformRequestRayTrainConfigGpuSpecs },
      terminalConfig: CreateEmbodiedAIPlatformRequestRayTrainConfigTerminalConfig,
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

export class CreateEmbodiedAIPlatformRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @example
   * 3
   */
  deviceCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * platform1
   */
  platformName?: string;
  rayConfig?: CreateEmbodiedAIPlatformRequestRayConfig;
  rayTrainConfig?: CreateEmbodiedAIPlatformRequestRayTrainConfig;
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
      deviceCount: 'number',
      platformName: 'string',
      rayConfig: CreateEmbodiedAIPlatformRequestRayConfig,
      rayTrainConfig: CreateEmbodiedAIPlatformRequestRayTrainConfig,
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

