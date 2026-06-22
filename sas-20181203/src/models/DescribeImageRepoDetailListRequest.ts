// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageRepoDetailListRequest extends $dara.Model {
  /**
   * @remarks
   * The search conditions for assets. This parameter is in JSON format and contains the following fields:
   * - **name**: the search item.
   * - **value**: the value of the search item.
   * - **logicalExp**: the logical relationship among multiple search item values. Valid values:
   *     - **OR**: The search item values are evaluated by using a logical OR.
   *     - **AND**: The search item values are evaluated by using a logical AND.
   * > Call the [DescribeImageRepoCriteria](~~DescribeImageRepoCriteria~~) operation to query the supported search conditions.
   * 
   * @example
   * [{"name":"vulStatus","value":"YES","logicalExp":"AND"}]
   */
  criteria?: string;
  /**
   * @remarks
   * The page number of the first page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The logical relationship among multiple search conditions. Valid values:
   * - **OR**: The conditions are evaluated by using a logical OR.
   * - **AND**: The conditions are evaluated by using a logical AND.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The maximum number of entries per page when using paging. Default value: 20. If you leave this parameter empty, 20 entries are returned per page.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      currentPage: 'CurrentPage',
      logicalExp: 'LogicalExp',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      currentPage: 'number',
      logicalExp: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

