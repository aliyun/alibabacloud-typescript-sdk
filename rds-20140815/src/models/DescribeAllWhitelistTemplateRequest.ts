// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAllWhitelistTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable fuzzy search. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  fuzzySearch?: boolean;
  /**
   * @remarks
   * The number of records per page. Valid values: 10, 30, and 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  maxRecordsPerPage?: number;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumbers?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/610399.html) operation to query the available regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. For more information about resource groups, see What is a resource group.
   * 
   * @example
   * rg-acfmyhigx******
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the whitelist template. Specify this parameter for fuzzy search. Fuzzy match is supported for template names. You can call the DescribeWhitelistTemplate operation to obtain the template name.
   * 
   * @example
   * template
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      fuzzySearch: 'FuzzySearch',
      maxRecordsPerPage: 'MaxRecordsPerPage',
      pageNumbers: 'PageNumbers',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fuzzySearch: 'boolean',
      maxRecordsPerPage: 'number',
      pageNumbers: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

