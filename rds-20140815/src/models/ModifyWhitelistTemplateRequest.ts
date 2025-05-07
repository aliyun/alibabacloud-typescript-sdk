// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWhitelistTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The IP addresses in an IP address whitelist. Separate multiple IP addresses with commas (,). Each IP address in the IP address whitelist must be unique. The entries in the IP address whitelist must be in one of the following formats:
   * 
   * *   IP addresses, such as 10.23.XX.XX.
   * *   CIDR blocks, such as 10.23.XX.XX/24. In this example, 24 indicates that the prefix of the CIDR block is 24-bit in length. You can replace 24 with a value that ranges from 1 to 32.
   * 
   * > : A maximum of 1,000 IP addresses or CIDR blocks can be added for each instance. If you want to add a large number of IP addresses, we recommend that you merge them into CIDR blocks, such as 10.23.XX.XX/24.
   * 
   * This parameter is required.
   * 
   * @example
   * 139.196.X.X,101.132.X.X
   */
  ipWhitelist?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. For more information about resource groups, see related documentation.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the whitelist template. This parameter is required when you modify or delete a whitelist. You can call the DescribeAllWhitelistTemplate operation to obtain the ID of the whitelist.
   * 
   * @example
   * 539
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the IP whitelist. This parameter is required when you create a whitelist. The value of this parameter cannot be modified after the whitelist is created. The value must be unique to an Alibaba Cloud account and start with a letter. You can call the DescribeWhitelistTemplate operation to obtain the name of the whitelist.
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

