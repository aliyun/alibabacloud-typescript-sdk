// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachGadInstanceDbMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the active geo-redundancy instance group.
   * 
   * @example
   * gad-bp162d4tp0500****
   */
  instanceId?: string;
  ownerId?: string;
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
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance ID of the secondary role.
   * 
   * @example
   * rm-sdfghjk****
   */
  slaveDbInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      slaveDbInstanceId: 'SlaveDbInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      slaveDbInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

