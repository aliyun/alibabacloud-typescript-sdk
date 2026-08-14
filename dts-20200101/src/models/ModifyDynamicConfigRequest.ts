// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDynamicConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The rate limit configurations.
   * 
   * - **dts.datamove.blaster.qps.max**: the queries per second (QPS) for querying the source database.
   * - **dts.datamove.source.rps.max**: the records per second (RPS) for full data synchronization or migration.
   * - **dts.datamove.source.bps.max**: the data volume per second for full data synchronization or migration. Unit: bytes per second.
   * 
   * > - If **JobCode** is set to **03**, you must set **EnableLimit** to **true** for the three parameters to take effect.
   * - If **JobCode** is set to **04** or **07**, you only need to configure **dts.datamove.source.rps.max** and **dts.datamove.source.bps.max**.
   * - A value of **-1** indicates that no rate limit is applied.
   * 
   * @example
   * {
   *       "dts.datamove.source.rps.max": 5000,
   *       "dts.datamove.source.bps.max": 10485760
   * }
   */
  configList?: string;
  /**
   * @remarks
   * The ID of the data synchronization or migration task.
   * 
   * > You can call [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) to obtain the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ta7w132u12h****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * Specifies whether to limit the migration rate of the full data synchronization or migration task. Valid values: **true** and **false**.
   * 
   * > This parameter is required only when **JobCode** is set to **03**.
   * 
   * @example
   * true
   */
  enableLimit?: boolean;
  /**
   * @remarks
   * The task code. Valid values:
   * 
   * - **03**: full data synchronization or migration task.
   * - **04**: incremental data migration task.
   * - **07**: incremental data synchronization task.
   * 
   * This parameter is required.
   * 
   * @example
   * 07
   */
  jobCode?: string;
  /**
   * @remarks
   * The ID of the region where the DTS instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
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

