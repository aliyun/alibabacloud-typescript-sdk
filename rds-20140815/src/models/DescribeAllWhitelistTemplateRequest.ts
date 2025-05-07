// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAllWhitelistTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable fuzzy search. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  fuzzySearch?: boolean;
  /**
   * @remarks
   * The number of entries to return on each page. Enumerated valid values: 10, 30, and 50.
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
   * The region ID.
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
   * rg-acfmyhigxskzysy
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the IP whitelist template. If you specify this parameter when you perform a fuzzy search, you can call the DescribeWhitelistTemplate operation to query the name of the whitelist template during the fuzzy search.
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

