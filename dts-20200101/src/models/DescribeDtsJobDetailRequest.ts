// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The output type of the migration object information.
   * 
   * @example
   * NONE
   */
  dbObjectOutputType?: string;
  /**
   * @remarks
   * The data migration, data synchronization, or subscribe instance ID.
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
   * The region ID of the task. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to return the information about all synchronization subtasks. Default value: **false**. If this parameter is set to false, only the information about the ongoing or most recently executed synchronization subtask is returned.
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
   * - This parameter takes effect only when you set it to **Reverse** and the synchronization topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * Specifies whether the node is a seamless integration (Zero-ETL) node. Valid values:
   * - **true**: yes.
   * - **false**: no.
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

