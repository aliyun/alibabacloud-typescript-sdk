// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWhitelistTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist of the instance. Separate multiple IP addresses with commas (,). Duplicates are not allowed. The following two formats are supported:
   * 
   * - IP address format, such as 10.23.XX.XX.
   * - CIDR format, such as 10.23.XX.XX/24 (Classless Inter-Domain Routing, where 24 indicates the length of the prefix in the address, and the valid values are 1 to 32).
   * 
   * > You can add up to 1,000 IP addresses or CIDR blocks to each instance. The total number of IP addresses and CIDR blocks in all IP address whitelist groups cannot exceed 1,000. If you have a large number of IP addresses, we recommend that you merge them into CIDR blocks, such as 10.23.XX.XX/24.
   * 
   * This parameter is required.
   * 
   * @example
   * 139.196.X.X,101.132.X.X
   */
  ipWhitelist?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) operation to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. For more information about resource groups, see What is a resource group?
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the whitelist template. This parameter is required for modify and delete operations. You can call the DescribeAllWhitelistTemplate operation to obtain the ID.
   * 
   * @example
   * 539
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the whitelist template. This parameter is required when you create a template. The name cannot be modified after the template is created. The name must be unique within the same account and start with a letter. You can call the DescribeWhitelistTemplate operation to obtain the name.
   * 
   * @example
   * template_123
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      ipWhitelist: 'IpWhitelist',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipWhitelist: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateId: 'number',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

