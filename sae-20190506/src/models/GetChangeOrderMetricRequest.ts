// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChangeOrderMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @remarks
   * The type of the Serverless App Engine (SAE) application.
   * 
   * - **micro_service**
   * - **web**
   * - **job**
   * 
   * @example
   * micro_service
   */
  appSource?: string;
  /**
   * @remarks
   * The change order type.
   * 
   * @example
   * CoCreateApp
   */
  coType?: string;
  /**
   * @remarks
   * The CPU allocation strategy. Valid values:
   * 
   * - **request**: Allocates CPU resources only when requests are received.
   * - **always**: Always allocates a fixed amount of CPU resources.
   * 
   * @example
   * always
   */
  cpuStrategy?: string;
  /**
   * @remarks
   * The start time of change order creation.
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
   * The field used to sort the query results.
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

