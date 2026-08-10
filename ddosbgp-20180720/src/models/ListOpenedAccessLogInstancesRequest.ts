// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOpenedAccessLogInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number to return in a paging query. Default value: **1**, which indicates the first page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page in a paging query. Default value: **10**, which indicates 10 entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group to which the Anti-DDoS Origin instance belongs in Resource Management. By default, this parameter is empty, which indicates that the instance belongs to the default resource group.
   * 
   * For more information about resource groups, see [Create a resource group](https://help.aliyun.com/document_detail/94485.html).
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

