// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAvailabilityMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The SAE application type. Valid values:
   * 
   * *   **micro_service**
   * *   **web**
   * *   **job**
   * 
   * @example
   * micro_service
   */
  appSource?: string;
  /**
   * @remarks
   * The CPU allocation policy. Valid values:
   * 
   * *   **request**: CPU cores are allocated only when a request is initiated.
   * *   **always**: Fixed CPU cores are always allocated.
   * 
   * @example
   * always
   */
  cpuStrategy?: string;
  /**
   * @remarks
   * The number of entries to return. Valid values: 0 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appSource: 'AppSource',
      cpuStrategy: 'CpuStrategy',
      limit: 'Limit',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSource: 'string',
      cpuStrategy: 'string',
      limit: 'number',
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

