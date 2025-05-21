// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTableStatisticsResponseBodyItems } from "./DescribeTableStatisticsResponseBodyItems";


export class DescribeTableStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The queried table statistics.
   */
  items?: DescribeTableStatisticsResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C4433FF-5D3A-4C3E-A19C-6D93B2******
   */
  requestId?: string;
  schemaNames?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      schemaNames: 'SchemaNames',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      items: DescribeTableStatisticsResponseBodyItems,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      schemaNames: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

