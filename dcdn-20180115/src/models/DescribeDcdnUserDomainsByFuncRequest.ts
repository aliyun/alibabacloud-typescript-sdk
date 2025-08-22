// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnUserDomainsByFuncRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name whose ICP filing status you want to update.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies whether the feature that is specified by the FuncId parameter is enabled.
   * 
   * *   **config**: enabled
   * *   **unconfig**: not enabled
   * 
   * @example
   * config
   */
  funcFilter?: string;
  /**
   * @remarks
   * The ID of the feature. For more information about how to query feature IDs, see [Parameters for configuring features for domain names](https://help.aliyun.com/document_detail/410622.html). For example, the ID of the origin host feature (set_req_host_header) is 18.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  funcId?: number;
  /**
   * @remarks
   * The type of the search. Default value: exact_match. Valid values:
   * 
   * *   fuzzy_match: fuzzy search.
   * *   exact_match: exact search.
   * 
   * @example
   * exact_match
   */
  matchType?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**. Valid values: **1 to 100000**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **20**. Valid values: **1 to 500**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyuji4b6r4**
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      funcFilter: 'FuncFilter',
      funcId: 'FuncId',
      matchType: 'MatchType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      funcFilter: 'string',
      funcId: 'number',
      matchType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

