// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the conditions for searching assets. This parameter is in JSON format and contains the following fields:
   * - **name**: The search item.
   * - **value**: The value of the search item.
   * - **logicalExp**: The logical relationship between multiple search item values. Valid values:
   *     - **OR**: The multiple search item values are in an **OR** relationship.
   *     - **AND**: The multiple search item values are in an **AND** relationship.
   * > You can call the [DescribeImageRepoCriteria](~~DescribeImageRepoCriteria~~) operation to query supported search conditions.
   * 
   * @example
   * [{"name":"instanceId","value":"390100182","logicalExp":"AND"}]
   */
  criteria?: string;
  /**
   * @remarks
   * The page number of the returned results to start displaying. The starting value is **1**. Default value: **1**, which indicates that page 1 is displayed.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Sets the logical relationship between multiple search conditions. Valid values:
   * 
   * - **OR**: The multiple search conditions are in an **OR** relationship.
   * - **AND**: The multiple search conditions are in an **AND** relationship.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page during a paged query. The default number of entries per page is 20. If the PageSize parameter is left empty, 20 entries are returned by default.
   * > We recommend that you do not leave the PageSize parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether the image has been scanned. Valid values:
   * - **true**: processed.
   * - **false**: not processed.
   * 
   * @example
   * true
   */
  scanned?: boolean;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      currentPage: 'CurrentPage',
      logicalExp: 'LogicalExp',
      pageSize: 'PageSize',
      scanned: 'Scanned',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      currentPage: 'number',
      logicalExp: 'string',
      pageSize: 'number',
      scanned: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

