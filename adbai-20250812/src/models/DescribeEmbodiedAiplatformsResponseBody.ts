// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEmbodiedAIPlatformsResponseBodyPlatformsEapConfig extends $dara.Model {
  /**
   * @remarks
   * The public network access address of the platform webserver.
   * 
   * @example
   * http://amv-2z******-***-roboto.ads.example.com:80
   */
  webserverAddress?: string;
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
      webserverAddress: 'WebserverAddress',
      webserverSpecName: 'WebserverSpecName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      webserverAddress: 'string',
      webserverSpecName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEmbodiedAIPlatformsResponseBodyPlatformsRayConfigWorkerGroups extends $dara.Model {
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
   * worker1
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
   * The disk size of each worker.
   * 
   * @example
   * 100G
   */
  workerDiskCapacity?: string;
  /**
   * @remarks
   * The worker resource model.
   * 
   * @example
   * large
   */
  workerSpecName?: string;
  /**
   * @remarks
   * The Ray worker resource type.
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

export class DescribeEmbodiedAIPlatformsResponseBodyPlatformsRayConfig extends $dara.Model {
  /**
   * @remarks
   * The Ray cluster type. Valid values:
   * 
   * - BASIC: basic type without high availability.
   * - HIGH_AVAILABILITY: high-availability type.
   * 
   * @example
   * BASIC
   */
  category?: string;
  /**
   * @remarks
   * The disk size of the head node.
   * 
   * @example
   * 100G
   */
  headDiskCapacity?: string;
  /**
   * @remarks
   * The node specifications of the head node.
   * 
   * @example
   * large
   */
  headSpec?: string;
  /**
   * @remarks
   * The resource type of the head node.
   * 
   * @example
   * CPU
   */
  headSpecType?: string;
  /**
   * @remarks
   * The Ray cluster address.
   * 
   * @example
   * http://ray-cluster-address.example.com
   */
  rayClusterAddress?: string;
  /**
   * @remarks
   * The Ray Dashboard address.
   * 
   * @example
   * http://ray-dashboard-address.example.com
   */
  rayDashboardAddress?: string;
  /**
   * @remarks
   * The Ray Grafana address.
   * 
   * @example
   * http://ray-grafana-address.example.com
   */
  rayGrafanaAddress?: string;
  /**
   * @remarks
   * The list of Ray worker group configurations.
   */
  workerGroups?: DescribeEmbodiedAIPlatformsResponseBodyPlatformsRayConfigWorkerGroups[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      headDiskCapacity: 'HeadDiskCapacity',
      headSpec: 'HeadSpec',
      headSpecType: 'HeadSpecType',
      rayClusterAddress: 'RayClusterAddress',
      rayDashboardAddress: 'RayDashboardAddress',
      rayGrafanaAddress: 'RayGrafanaAddress',
      workerGroups: 'WorkerGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      headDiskCapacity: 'string',
      headSpec: 'string',
      headSpecType: 'string',
      rayClusterAddress: 'string',
      rayDashboardAddress: 'string',
      rayGrafanaAddress: 'string',
      workerGroups: { 'type': 'array', 'itemType': DescribeEmbodiedAIPlatformsResponseBodyPlatformsRayConfigWorkerGroups },
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

export class DescribeEmbodiedAIPlatformsResponseBodyPlatformsRayTrainConfigGpuSpecs extends $dara.Model {
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

export class DescribeEmbodiedAIPlatformsResponseBodyPlatformsRayTrainConfigTerminalConfigAcrConfig extends $dara.Model {
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

export class DescribeEmbodiedAIPlatformsResponseBodyPlatformsRayTrainConfigTerminalConfig extends $dara.Model {
  acrConfig?: DescribeEmbodiedAIPlatformsResponseBodyPlatformsRayTrainConfigTerminalConfigAcrConfig;
  static names(): { [key: string]: string } {
    return {
      acrConfig: 'AcrConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrConfig: DescribeEmbodiedAIPlatformsResponseBodyPlatformsRayTrainConfigTerminalConfigAcrConfig,
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

export class DescribeEmbodiedAIPlatformsResponseBodyPlatformsRayTrainConfig extends $dara.Model {
  cpuAcu?: number;
  gpuSpecs?: DescribeEmbodiedAIPlatformsResponseBodyPlatformsRayTrainConfigGpuSpecs[];
  terminalConfig?: DescribeEmbodiedAIPlatformsResponseBodyPlatformsRayTrainConfigTerminalConfig;
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
      gpuSpecs: { 'type': 'array', 'itemType': DescribeEmbodiedAIPlatformsResponseBodyPlatformsRayTrainConfigGpuSpecs },
      terminalConfig: DescribeEmbodiedAIPlatformsResponseBodyPlatformsRayTrainConfigTerminalConfig,
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

export class DescribeEmbodiedAIPlatformsResponseBodyPlatforms extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-12-01 14:55:36
   */
  createTime?: number;
  /**
   * @remarks
   * The webserver configuration of the platform.
   */
  eapConfig?: DescribeEmbodiedAIPlatformsResponseBodyPlatformsEapConfig;
  /**
   * @remarks
   * The lake storage name.
   * 
   * @example
   * adb-lake-cn-beijing-5q1w******
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The platform name.
   * 
   * @example
   * platform1
   */
  platformName?: string;
  /**
   * @remarks
   * The Ray specification information of the platform.
   */
  rayConfig?: DescribeEmbodiedAIPlatformsResponseBodyPlatformsRayConfig;
  rayTrainConfig?: DescribeEmbodiedAIPlatformsResponseBodyPlatformsRayTrainConfig;
  /**
   * @remarks
   * The running status.
   * 
   * @example
   * running
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      eapConfig: 'EapConfig',
      ossBucketName: 'OssBucketName',
      platformName: 'PlatformName',
      rayConfig: 'RayConfig',
      rayTrainConfig: 'RayTrainConfig',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      eapConfig: DescribeEmbodiedAIPlatformsResponseBodyPlatformsEapConfig,
      ossBucketName: 'string',
      platformName: 'string',
      rayConfig: DescribeEmbodiedAIPlatformsResponseBodyPlatformsRayConfig,
      rayTrainConfig: DescribeEmbodiedAIPlatformsResponseBodyPlatformsRayTrainConfig,
      state: 'string',
    };
  }

  validate() {
    if(this.eapConfig && typeof (this.eapConfig as any).validate === 'function') {
      (this.eapConfig as any).validate();
    }
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

export class DescribeEmbodiedAIPlatformsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Use the paged query parameters PageSize, PageNumber, and TotalCount for paging.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * Use the paged query parameters PageSize, PageNumber, and TotalCount for paging.
   * 
   * @example
   * 9c3158c2e8acf616501bd5ee05******
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of embodied intelligence multimodal data platforms.
   */
  platforms?: DescribeEmbodiedAIPlatformsResponseBodyPlatforms[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B47EED99-BFA5-529D-8D85-A6642421D390
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of platforms.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      platforms: 'Platforms',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      platforms: { 'type': 'array', 'itemType': DescribeEmbodiedAIPlatformsResponseBodyPlatforms },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.platforms)) {
      $dara.Model.validateArray(this.platforms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

