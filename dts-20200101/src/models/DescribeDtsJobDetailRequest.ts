// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobDetailRequest extends $dara.Model {
  dbObjectOutputType?: string;
  /**
   * @remarks
   * The instance ID of the data migration, data synchronization, or subscribe instance.
   * 
   * @example
   * dtsta7w132u12h****
   */
  dtsInstanceID?: string;
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking task.
   * 
   * @example
   * ta7w132u12h****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The ID of the region in which the task resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to return information about all synchronization subtasks. Default value: **false**, which returns only the synchronization subtask that is in progress or the most recently executed synchronization subtask.
   * 
   * @example
   * false
   */
  syncSubJobHistory?: boolean;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * - **Forward**: forward.
   * - **Reverse**: reverse.
   * 
   * > - Default value: **Forward**.
   * - The value **Reverse** takes effect only when the synchronization topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * Specifies whether the task is a zero-ETL task. Valid values:
   * - **true**: The task is a zero-ETL task.
   * - **false**: The task is not a zero-ETL task.
   * 
   * @example
   * false
   */
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbObjectOutputType: 'DbObjectOutputType',
      dtsInstanceID: 'DtsInstanceID',
      dtsJobId: 'DtsJobId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      syncSubJobHistory: 'SyncSubJobHistory',
      synchronizationDirection: 'SynchronizationDirection',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbObjectOutputType: 'string',
      dtsInstanceID: 'string',
      dtsJobId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      syncSubJobHistory: 'boolean',
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

