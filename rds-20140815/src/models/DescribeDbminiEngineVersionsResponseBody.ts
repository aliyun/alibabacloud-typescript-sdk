// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBMiniEngineVersionsResponseBodyMinorVersionItems } from "./DescribeDbminiEngineVersionsResponseBodyMinorVersionItems";


export class DescribeDBMiniEngineVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5*****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxRecordsPerPage?: number;
  /**
   * @remarks
   * The details of the minor engine version.
   */
  minorVersionItems?: DescribeDBMiniEngineVersionsResponseBodyMinorVersionItems[];
  /**
   * @remarks
   * The page number returned.
   * 
   * @example
   * 1
   */
  pageNumbers?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EFB6083A-7699-489B-8278-C0CB4793A96E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      maxRecordsPerPage: 'MaxRecordsPerPage',
      minorVersionItems: 'MinorVersionItems',
      pageNumbers: 'PageNumbers',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      maxRecordsPerPage: 'number',
      minorVersionItems: { 'type': 'array', 'itemType': DescribeDBMiniEngineVersionsResponseBodyMinorVersionItems },
      pageNumbers: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.minorVersionItems)) {
      $dara.Model.validateArray(this.minorVersionItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

