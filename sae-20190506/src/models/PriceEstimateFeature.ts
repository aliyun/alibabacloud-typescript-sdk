// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PriceEstimateFeature extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Web/MicroService
   */
  appType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  cpuCore?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Request/Always
   */
  cpuStrategy?: string;
  /**
   * @example
   * L1
   */
  cpuUtilLevel?: string;
  cpuUtilMetrics?: number[];
  /**
   * @example
   * true
   */
  enableCpuIdle?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Test/Production
   */
  envType?: string;
  /**
   * @example
   * 30
   */
  ephemeralStorageGiB?: number;
  /**
   * @example
   * 3
   */
  highLoadInstanceCount?: number;
  /**
   * @example
   * 5
   */
  highLoadQps?: number;
  /**
   * @example
   * 3600
   */
  highLoadSeconds?: number;
  /**
   * @example
   * 2
   */
  instanceQps?: number;
  /**
   * @example
   * 24
   */
  internetOutboundGiB?: number;
  /**
   * @example
   * 1
   */
  lowLoadInstanceCount?: number;
  /**
   * @example
   * 2
   */
  lowLoadQps?: number;
  /**
   * @example
   * 3600
   */
  lowLoadSeconds?: number;
  /**
   * @example
   * 10
   */
  maxInstanceCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  memoryGiB?: number;
  /**
   * @example
   * 1
   */
  minInstanceCount?: number;
  /**
   * @example
   * std
   */
  newSaeVersion?: string;
  /**
   * @example
   * 0
   */
  noneLoadInstanceCount?: number;
  /**
   * @example
   * 79200
   */
  noneLoadSeconds?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * haiguang
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      cpuCore: 'CpuCore',
      cpuStrategy: 'CpuStrategy',
      cpuUtilLevel: 'CpuUtilLevel',
      cpuUtilMetrics: 'CpuUtilMetrics',
      enableCpuIdle: 'EnableCpuIdle',
      envType: 'EnvType',
      ephemeralStorageGiB: 'EphemeralStorageGiB',
      highLoadInstanceCount: 'HighLoadInstanceCount',
      highLoadQps: 'HighLoadQps',
      highLoadSeconds: 'HighLoadSeconds',
      instanceQps: 'InstanceQps',
      internetOutboundGiB: 'InternetOutboundGiB',
      lowLoadInstanceCount: 'LowLoadInstanceCount',
      lowLoadQps: 'LowLoadQps',
      lowLoadSeconds: 'LowLoadSeconds',
      maxInstanceCount: 'MaxInstanceCount',
      memoryGiB: 'MemoryGiB',
      minInstanceCount: 'MinInstanceCount',
      newSaeVersion: 'NewSaeVersion',
      noneLoadInstanceCount: 'NoneLoadInstanceCount',
      noneLoadSeconds: 'NoneLoadSeconds',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      cpuCore: 'number',
      cpuStrategy: 'string',
      cpuUtilLevel: 'string',
      cpuUtilMetrics: { 'type': 'array', 'itemType': 'number' },
      enableCpuIdle: 'boolean',
      envType: 'string',
      ephemeralStorageGiB: 'number',
      highLoadInstanceCount: 'number',
      highLoadQps: 'number',
      highLoadSeconds: 'number',
      instanceQps: 'number',
      internetOutboundGiB: 'number',
      lowLoadInstanceCount: 'number',
      lowLoadQps: 'number',
      lowLoadSeconds: 'number',
      maxInstanceCount: 'number',
      memoryGiB: 'number',
      minInstanceCount: 'number',
      newSaeVersion: 'string',
      noneLoadInstanceCount: 'number',
      noneLoadSeconds: 'number',
      regionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cpuUtilMetrics)) {
      $dara.Model.validateArray(this.cpuUtilMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

