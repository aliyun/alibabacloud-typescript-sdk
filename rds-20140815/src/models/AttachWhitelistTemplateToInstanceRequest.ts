// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachWhitelistTemplateToInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp191w771kd3****
   */
  insName?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. For more information about resource groups, see Resource groups.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the whitelist template. You can call the DescribeAllWhitelistTemplate operation to obtain the ID of the whitelist template.
   * 
   * This parameter is required.
   * 
   * @example
   * 412
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      insName: 'InsName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

