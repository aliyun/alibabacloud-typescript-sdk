// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDynamicConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The specific throttling configuration.
   * 
   * *   **dts.datamove.blaster.qps.max**: The rate at which queries are made to the source database per second.
   * *   **dts.datamove.source.rps.max**: The number of rows that are fully synchronized or migrated per second.
   * *   **dts.datamove.source.bps.max**: the amount of data processed per second for full synchronization or migration. Unit: MB.
   * 
   * > 
   * 
   * *   If you set the **JobCode** parameter to **03**, you need to specify **true** for the **EnableLimit** parameter. Otherwise, the configuration cannot take effect.
   * 
   * *   If you set the **JobCode** parameter to **04** or **07**, you only need to specify the **dts.datamove.source.rps.max** and **dts.datamove.source.bps.max** parameters.
   * *   A value of \\*\\*-1\\*\\* indicates no rate limit.
   * 
   * @example
   * {\\"dts.datamove.source.rps.max\\":5000,\\"dts.datamove.source.bps.max\\":10485760}
   */
  configList?: string;
  /**
   * @remarks
   * The ID of the data migration or synchronization task.
   * 
   * >  You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ta7w132u12h****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * Specifies whether to enable throttling for data synchronization or migration. Valid values: **true** and **false**.
   * 
   * >  Only needs to be configured when the **JobCode** parameter is set to **03**.
   * 
   * @example
   * true
   */
  enableLimit?: boolean;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * *   **03**: a full data synchronization or full data migration task.
   * *   **04**: an incremental data migration task.
   * *   **07**: an incremental data synchronization task.
   * 
   * This parameter is required.
   * 
   * @example
   * 07
   */
  jobCode?: string;
  /**
   * @remarks
   * The region ID of the DTS instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-aekz6zsi7ce5rpy
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      configList: 'ConfigList',
      dtsJobId: 'DtsJobId',
      enableLimit: 'EnableLimit',
      jobCode: 'JobCode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configList: 'string',
      dtsJobId: 'string',
      enableLimit: 'boolean',
      jobCode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

