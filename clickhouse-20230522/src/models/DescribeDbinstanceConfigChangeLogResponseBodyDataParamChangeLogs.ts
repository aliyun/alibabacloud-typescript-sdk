// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceConfigChangeLogResponseBodyDataParamChangeLogs extends $dara.Model {
  applied?: boolean;
  /**
   * @example
   * 2025-06-25 13:46:06
   */
  gmtCreated?: string;
  /**
   * @example
   * 2025-06-25 13:46:06
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  ID?: number;
  /**
   * @example
   * max_concurrent_queries
   */
  name?: string;
  /**
   * @example
   * 100
   */
  newValue?: string;
  /**
   * @example
   * 50
   */
  oldValue?: string;
  static names(): { [key: string]: string } {
    return {
      applied: 'Applied',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      ID: 'ID',
      name: 'Name',
      newValue: 'NewValue',
      oldValue: 'OldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applied: 'boolean',
      gmtCreated: 'string',
      gmtModified: 'string',
      ID: 'number',
      name: 'string',
      newValue: 'string',
      oldValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

