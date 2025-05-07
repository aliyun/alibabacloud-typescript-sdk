// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChangeOrderMetricRequest extends $dara.Model {
  appId?: string;
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
  coType?: string;
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
   * The start time when the change order was created.
   * 
   * This parameter is required.
   * 
   * @example
   * 1661152748883
   */
  createTime?: string;
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
   * The field based on which you want to sort the returned entries.
   * 
   * This parameter is required.
   * 
   * @example
   * errorPercent
   */
  orderBy?: string;
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
      appId: 'AppId',
      appSource: 'AppSource',
      coType: 'CoType',
      cpuStrategy: 'CpuStrategy',
      createTime: 'CreateTime',
      limit: 'Limit',
      orderBy: 'OrderBy',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSource: 'string',
      coType: 'string',
      cpuStrategy: 'string',
      createTime: 'string',
      limit: 'number',
      orderBy: 'string',
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

