// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnIpaUserDomainsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. Valid values of N: 1 to 20. You can call the TagDcdnResources operation to set a tag for a domain name.
   * 
   * @example
   * 1
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: 1 to 20.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaUserDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to display domain names that are under review, failed the review, or failed to be configured. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  checkDomainShow?: boolean;
  /**
   * @remarks
   * The domain name that is used as a keyword to filter domain names. Fuzzy match is supported.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The search method. Default value: full_match. Valid values:
   * 
   * *   **fuzzy_match**: fuzzy match
   * *   **pre_match**: prefix match
   * *   **suf_match**: suffix match
   * *   **full_match**: exact match
   * 
   * @example
   * fuzzy_match
   */
  domainSearchType?: string;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * *   **online**: enabled
   * *   **offline**: disabled
   * *   **configuring**: configuring
   * *   **configure_failed**: configuration failed
   * *   **checking**: reviewing
   * *   **check_failed:** review failed
   * 
   * @example
   * online
   */
  domainStatus?: string;
  /**
   * @remarks
   * The status of the feature.
   * 
   * *   config: The feature is enabled.
   * *   unconfig: The feature is not enabled.
   * 
   * @example
   * config
   */
  funcFilter?: string;
  /**
   * @remarks
   * The ID of the feature. For example, a value of 7 specifies the feature of configuring an expiration rule for a specific directory. For more information about feature IDs, see [Parameters for configuring features for domain names](https://help.aliyun.com/document_detail/410622.html).
   * 
   * @example
   * 7
   */
  funcId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Valid values: **1** to **100000**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of domain names per page. Default value: **20**.**** Valid values: **1** to **500**.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * abcd1234abcd****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the command.
   */
  tag?: DescribeDcdnIpaUserDomainsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      checkDomainShow: 'CheckDomainShow',
      domainName: 'DomainName',
      domainSearchType: 'DomainSearchType',
      domainStatus: 'DomainStatus',
      funcFilter: 'FuncFilter',
      funcId: 'FuncId',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkDomainShow: 'boolean',
      domainName: 'string',
      domainSearchType: 'string',
      domainStatus: 'string',
      funcFilter: 'string',
      funcId: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDcdnIpaUserDomainsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

