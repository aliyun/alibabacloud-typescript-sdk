// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchPhysicalDtsJobToCloudRequest extends $dara.Model {
  /**
   * @remarks
   * Migration, synchronization, or subscription instance ID.
   * 
   * @example
   * dtsl3m1213ye7l****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * Data migration or synchronization instance ID, which can be queried by calling the **describedtsjobs** interface.
   * 
   * @example
   * l5512es7w15****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * Region ID. Pass this parameter to specify the region where the instance is located. For more details, see the list of supported regions.
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
   * rg-aekz4us4iruleja
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Synchronization direction, values: - **Forward**: Forward. - **Reverse**: Reverse.
   * > - The default value is **Forward**. - **Reverse** can only be passed when the topology of the data synchronization instance is bidirectional, to release the reverse synchronization link.
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

