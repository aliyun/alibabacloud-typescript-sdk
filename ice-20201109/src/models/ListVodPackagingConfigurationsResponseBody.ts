// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VodPackagingConfiguration } from "./VodPackagingConfiguration";


export class ListVodPackagingConfigurationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of packaging configurations.
   */
  packagingConfigurations?: VodPackagingConfiguration[];
  /**
   * @remarks
   * The page number for paging. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page for paging. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The sort order. Default value: desc. Valid values:
   * - desc: Sorts the list in descending order of creation time.
   * - asc: Sorts the list in ascending order of creation time.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      packagingConfigurations: 'PackagingConfigurations',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sortBy: 'SortBy',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packagingConfigurations: { 'type': 'array', 'itemType': VodPackagingConfiguration },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      sortBy: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.packagingConfigurations)) {
      $dara.Model.validateArray(this.packagingConfigurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

