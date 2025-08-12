// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogMonitorListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 123456
   */
  groupId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * The keyword that is used to search for log monitoring metrics. Fuzzy match is supported.
   * 
   * @example
   * test
   */
  searchValue?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      searchValue: 'SearchValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      searchValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

