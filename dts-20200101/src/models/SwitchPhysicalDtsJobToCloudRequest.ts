// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchPhysicalDtsJobToCloudRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the migration, synchronization, or change tracking instance.
   * 
   * @example
   * dtsl3m1213ye7l****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The ID of the data migration or synchronization instance. You can call the **describedtsjobs** operation to query the instance ID.
   * 
   * @example
   * l5512es7w15****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The region ID. Specify this parameter to indicate the region where the instance resides. For more information, see the list of supported regions.
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
   * rg-aekz4us4iruleja
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * - **Forward**: Forward.
   * - **Reverse**: Reverse.
   * 
   * > - Default value: **Forward**.
   * - You can specify **Reverse** to release the reverse synchronization link only when the topology of the data synchronization instance is two-way.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationDirection: 'SynchronizationDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      synchronizationDirection: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

