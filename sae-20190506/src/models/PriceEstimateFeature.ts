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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Test/Production
   */
  envType?: string;
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
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      cpuCore: 'CpuCore',
      cpuStrategy: 'CpuStrategy',
      envType: 'EnvType',
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
      noneLoadInstanceCount: 'NoneLoadInstanceCount',
      noneLoadSeconds: 'NoneLoadSeconds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      cpuCore: 'number',
      cpuStrategy: 'string',
      envType: 'string',
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
      noneLoadInstanceCount: 'number',
      noneLoadSeconds: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

