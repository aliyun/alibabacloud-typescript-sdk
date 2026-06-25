// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChangeOrderMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   */
  appId?: string;
  /**
   * @remarks
   * The type of the SAE application.
   * 
   * - **micro_service**
   * 
   * - **web**
   * 
   * - **job**
   * 
   * @example
   * micro_service
   */
  appSource?: string;
  /**
   * @remarks
   * The type of the change order.
   */
  coType?: string;
  /**
   * @remarks
   * The CPU allocation policy.
   * 
   * - **request**: CPU is allocated only when a request is received.
   * 
   * - **always**: A fixed amount of CPU is always allocated.
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
   * The field by which to sort the query results. The value of this parameter must be a field in the response parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * errorPercent
   */
  orderBy?: string;
  /**
   * @remarks
   * The ID of the region.
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

