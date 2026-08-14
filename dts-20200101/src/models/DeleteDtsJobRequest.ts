// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDtsJobRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the data migration, synchronization, or subscribe instance.
   * 
   * @example
   * dtsl3m1213ye7l****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The ID of the data migration, synchronization, or change tracking task.
   * 
   * @example
   * l3m1213ye7l****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The node type of the DTS instance. Valid values:
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
   * The ID of the region where the data migration or synchronization instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * A special business-specific field. You do not need to pass this parameter.
   * 
   * @example
   * rg-aek26lwshij****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * - **Forward**: forward.
   * - **Reverse**: reverse.
   * 
   * > - Default value: **Forward**.
   * - You can set this parameter to **Reverse** to release the reverse synchronization link only if the topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * A special business-specific field. You do not need to pass this parameter.
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

