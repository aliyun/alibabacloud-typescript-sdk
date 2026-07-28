// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEmbodiedAIPlatformRequestRayConfigWorkerGroups extends $dara.Model {
  /**
   * @remarks
   * The allocation unit.
   * 
   * @example
   * 1
   */
  allocateUnit?: string;
  /**
   * @remarks
   * The name of the worker group.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The maximum number of workers.
   * 
   * @example
   * 2
   */
  maxWorkerQuantity?: number;
  /**
   * @remarks
   * The minimum number of workers.
   * 
   * @example
   * 1
   */
  minWorkerQuantity?: number;
  /**
   * @remarks
   * The disk size of the worker node.
   * 
   * @example
   * 100G
   */
  workerDiskCapacity?: string;
  /**
   * @remarks
   * The node specifications of the worker node.
   * 
   * @example
   * xlarge
   */
  workerSpecName?: string;
  /**
   * @remarks
   * The resource type of the worker node.
   * 
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
   * @remarks
   * The Ray cluster type. Valid values:
   * 
   * - BASIC: basic type, non-high-availability.
   * 
   * - HIGH_AVAILABILITY: high-availability type.
   * 
   * @example
   * BASIC
   */
  category?: string;
  /**
   * @remarks
   * The node specifications of the head node.
   * 
   * @example
   * xlarge
   */
  headSpec?: string;
  /**
   * @remarks
   * The list of Ray worker group configurations.
   */
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
   * @remarks
   * The allocation unit.
   * 
   * @example
   * "1"
   */
  allocateUnit?: string;
  /**
   * @remarks
   * The number of GPU cards.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The GPU model.
   * 
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
   * @remarks
   * The instance ID of the image repository.
   * 
   * @example
   * cri-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of namespaces.
   */
  namespaces?: string[];
  /**
   * @remarks
   * The address of the image repository instance.
   * 
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
  /**
   * @remarks
   * The image repository configuration.
   */
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
  /**
   * @remarks
   * The number of CPU ACUs to purchase.
   */
  cpuAcu?: number;
  /**
   * @remarks
   * The list of GPU model specifications to purchase.
   */
  gpuSpecs?: CreateEmbodiedAIPlatformRequestRayTrainConfigGpuSpecs[];
  /**
   * @remarks
   * The development machine configuration.
   */
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
   * The instance cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ontology count.
   * 
   * @example
   * 3
   */
  deviceCount?: number;
  /**
   * @remarks
   * The name of the embodied intelligence multimodal data platform.
   * > The name can contain lowercase letters, digits, and underscores. It must start with a letter and end with a letter or digit. The name can be up to 16 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * platform1
   */
  platformName?: string;
  /**
   * @remarks
   * The Ray specification information of the platform.
   */
  rayConfig?: CreateEmbodiedAIPlatformRequestRayConfig;
  /**
   * @remarks
   * The development and training resource configuration.
   */
  rayTrainConfig?: CreateEmbodiedAIPlatformRequestRayTrainConfig;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the DescribeRegions operation to query the region ID of a specified Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The webserver specification of the platform.
   * 
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

