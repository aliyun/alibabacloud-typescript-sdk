// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridMonitorSLSGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword that is used to search for Logstore groups.
   * 
   * @example
   * Logstore
   */
  keyword?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Minimum value: 1. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  regionId?: string;
  /**
   * @remarks
   * The name of the Logstore group.
   * 
   * @example
   * Logstore_test
   */
  SLSGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      SLSGroupName: 'SLSGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      SLSGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

