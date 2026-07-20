// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UserQueryRequest extends $dara.Model {
  /**
   * @example
   * 2021-06-02 00:00:00
   */
  modifiedTimeGreaterOrEqualThan?: string;
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
  /**
   * @example
   * 12345
   */
  thirdPartJobNo?: string;
  static names(): { [key: string]: string } {
    return {
      modifiedTimeGreaterOrEqualThan: 'modified_time_greater_or_equal_than',
      pageSize: 'page_size',
      pageToken: 'page_token',
      thirdPartJobNo: 'third_part_job_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifiedTimeGreaterOrEqualThan: 'string',
      pageSize: 'number',
      pageToken: 'string',
      thirdPartJobNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

