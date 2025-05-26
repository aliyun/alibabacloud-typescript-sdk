// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApsDatasourcesResponseBodyApsDatasources } from "./DescribeApsDatasourcesResponseBodyApsDatasources";


export class DescribeApsDatasourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried APS data sources.
   * 
   * @example
   * -
   */
  apsDatasources?: DescribeApsDatasourcesResponseBodyApsDatasources[];
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
   * ******-5213-******-B608-******
   */
  requestId?: string;
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
      apsDatasources: 'ApsDatasources',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apsDatasources: { 'type': 'array', 'itemType': DescribeApsDatasourcesResponseBodyApsDatasources },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apsDatasources)) {
      $dara.Model.validateArray(this.apsDatasources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

