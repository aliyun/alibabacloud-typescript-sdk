// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VodPackagingConfiguration } from "./VodPackagingConfiguration";


export class ListVodPackagingConfigurationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The packaging configurations.
   */
  packagingConfigurations?: VodPackagingConfiguration[];
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The sorting order of the packaging configurations based on the time when they were created. Valid values:
   * 
   * *   desc: descending order.
   * *   asc: ascending order.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The total number of entries returned.
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

