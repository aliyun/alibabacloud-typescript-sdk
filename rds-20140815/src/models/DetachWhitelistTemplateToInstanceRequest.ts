// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachWhitelistTemplateToInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance name.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp191w771k******
   */
  insName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. For more information about resource groups, see Resource groups.
   * 
   * @example
   * rg-acfmz3kjr******
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

