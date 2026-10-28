// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopDtsJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data migration, data synchronization, or subscribe instance.
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
   * The region where the DTS instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * rg-acfm2jr35xnjh7i
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * - **Forward**: Forward synchronization.
   * - **Reverse**: Reverse synchronization.
   * 
   * > - Default value: **Forward**.
   * - You can specify **Reverse** to stop the reverse synchronization link only when the topology of the data synchronization instance is two-way.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * Specifies whether the task is a seamless integration (Zero-ETL) task. Valid values:
   * 
   * - **false**: No.
   * - **true**: Yes.
   * 
   * @example
   * true
   */
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
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

