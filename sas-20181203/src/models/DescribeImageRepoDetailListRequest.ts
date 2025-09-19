// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageRepoDetailListRequest extends $dara.Model {
  /**
   * @remarks
   * The search conditions for assets. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **name**: the search condition.
   * 
   * *   **name**: the value of the search condition.
   * 
   * *   **logicalExp**: the logical relation for multiple search conditions. Valid values:
   * 
   *     *   **OR**: The search conditions use a logical **OR**.
   *     *   **AND**: The search conditions use a logical **AND**.
   * 
   * > You can call the [DescribeImageRepoCriteria](~~DescribeImageRepoCriteria~~) operation to query the supported search conditions.
   * 
   * @example
   * [{"name":"vulStatus","value":"YES","logicalExp":"AND"}]
   */
  criteria?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The logical relationship that you want to use to evaluate multiple search conditions. Valid values:
   * 
   * *   **OR**: Search conditions are evaluated by using a logical **OR**.
   * *   **AND**: Search conditions are evaluated by using a logical **AND**.
   * 
   * @example
   * OR
   */
  logicalExp?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * > We recommend that you do not leave this parameter empty.
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

