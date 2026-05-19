// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEmbodiedAIPlatformsResponseBodyPlatformsEapConfig extends $dara.Model {
  /**
   * @example
   * http://amv-2z******-***-roboto.ads.example.com:80
   */
  webserverAddress?: string;
  /**
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
   * @example
   * 1
   */
  allocateUnit?: string;
  /**
   * @example
   * worker1
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
   * large
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

export class DescribeEmbodiedAIPlatformsResponseBodyPlatformsRayConfig extends $dara.Model {
  /**
   * @example
   * BASIC
   */
  category?: string;
  /**
   * @example
   * 100G
   */
  headDiskCapacity?: string;
  /**
   * @example
   * large
   */
  headSpec?: string;
  /**
   * @example
   * CPU
   */
  headSpecType?: string;
  /**
   * @example
   * http://ray-cluster-address.example.com
   */
  rayClusterAddress?: string;
  /**
   * @example
   * http://ray-dashboard-address.example.com
   */
  rayDashboardAddress?: string;
  /**
   * @example
   * http://ray-grafana-address.example.com
   */
  rayGrafanaAddress?: string;
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
   * @example
   * 2025-12-01 14:55:36
   */
  createTime?: number;
  eapConfig?: DescribeEmbodiedAIPlatformsResponseBodyPlatformsEapConfig;
  /**
   * @example
   * adb-lake-cn-beijing-5q1w******
   */
  ossBucketName?: string;
  /**
   * @example
   * platform1
   */
  platformName?: string;
  rayConfig?: DescribeEmbodiedAIPlatformsResponseBodyPlatformsRayConfig;
  rayTrainConfig?: DescribeEmbodiedAIPlatformsResponseBodyPlatformsRayTrainConfig;
  /**
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
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @example
   * 298a7d5473b128dfe0b5e8707e******
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  platforms?: DescribeEmbodiedAIPlatformsResponseBodyPlatforms[];
  /**
   * @example
   * B47EED99-BFA5-529D-8D85-A6642421D390
   */
  requestId?: string;
  /**
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

