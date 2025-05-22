// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or change tracking instance.
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
   * The ID of the region in which the Data Transmission Service (DTS) instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * Specifies whether to return the information about all data synchronization subtasks. Default value: **false**. A value of false indicates that the system returns only the information about a data synchronization subtask that is running or was most recently run.
   * 
   * @example
   * false
   */
  syncSubJobHistory?: boolean;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * *   **Forward**
   * *   **Reverse**
   * 
   * > 
   * 
   * *   The default value is **Forward**.
   * *   The value **Reverse** takes effect only if the topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * Specifies whether to query only zero-extract, transform, load (ETL) integration tasks. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
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

