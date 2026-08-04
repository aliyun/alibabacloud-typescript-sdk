// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Valid values: 1 to 10,000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The user\\"s department. The value must be 1 to 128 characters long and can contain Chinese characters, letters, digits, periods (.), commas (,), semicolons (;), hyphens (-), underscores (_), slashes (/), at signs (@), and spaces.
   * 
   * @example
   * 测试部
   */
  department?: string;
  /**
   * @remarks
   * The username for a fuzzy match. The value must be 1 to 128 characters long and can contain Chinese characters, letters, digits, periods (.), underscores (_), hyphens (-), asterisks (\\*), at signs (@), and spaces.
   * 
   * @example
   * 王先生
   */
  fuzzyUsername?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The username for an exact match. The value must be 1 to 128 characters long and can contain Chinese characters, letters, digits, periods (.), underscores (_), hyphens (-), asterisks (\\*), at signs (@), and spaces.
   * 
   * @example
   * 王先生@alibaba.com
   */
  preciseUsername?: string;
  /**
   * @remarks
   * An array of user IDs.
   */
  saseUserIds?: string[];
  /**
   * @remarks
   * The status of the user. Valid values:
   * 
   * - **Enabled**: The user is enabled.
   * 
   * - **Disabled**: The user is disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      department: 'Department',
      fuzzyUsername: 'FuzzyUsername',
      pageSize: 'PageSize',
      preciseUsername: 'PreciseUsername',
      saseUserIds: 'SaseUserIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      department: 'string',
      fuzzyUsername: 'string',
      pageSize: 'number',
      preciseUsername: 'string',
      saseUserIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.saseUserIds)) {
      $dara.Model.validateArray(this.saseUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

