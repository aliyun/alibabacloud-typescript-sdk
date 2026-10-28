// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDtsJobRequest extends $dara.Model {
  /**
   * @remarks
   * The data migration, data synchronization, or subscribe instance ID.
   * 
   * @example
   * dtsl3m1213ye7l****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking task.
   * 
   * @example
   * l3m1213ye7l****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The task type of the DTS instance. Valid values:
   * 
   * - **MIGRATION**: data migration.
   * - **SYNC**: data synchronization.
   * - **SUBSCRIBE**: change tracking.
   * 
   * @example
   * MIGRATION
   */
  jobType?: string;
  /**
   * @remarks
   * The region ID of the data migration or data synchronization instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The field reserved for special business scenarios. You do not need to specify this parameter.
   * 
   * @example
   * rg-aek26lwshij****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * - **Forward**: forward synchronization.
   * - **Reverse**: reverse synchronization.
   * 
   * > - Default value: **Forward**.
   * - You can set this parameter to **Reverse** to release the reverse synchronization link only when the synchronization topology of the data synchronization instance is two-way.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The field reserved for special business scenarios. You do not need to specify this parameter.
   * 
   * @example
   * true
   */
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      jobType: 'JobType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationDirection: 'SynchronizationDirection',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      jobType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      synchronizationDirection: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

