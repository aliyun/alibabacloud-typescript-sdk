// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchQueryDepartmentRequest extends $dara.Model {
  /**
   * @example
   * 2021-06-02 00:00:00
   */
  modifiedTimeGreaterOrEqualThan?: string;
  /**
   * @example
   * 129
   */
  outDeptId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 9YN+jxa7PcxbNUTISeKjEw==
   */
  pageToken?: string;
  static names(): { [key: string]: string } {
    return {
      modifiedTimeGreaterOrEqualThan: 'modified_time_greater_or_equal_than',
      outDeptId: 'out_dept_id',
      pageSize: 'page_size',
      pageToken: 'page_token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifiedTimeGreaterOrEqualThan: 'string',
      outDeptId: 'string',
      pageSize: 'number',
      pageToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

