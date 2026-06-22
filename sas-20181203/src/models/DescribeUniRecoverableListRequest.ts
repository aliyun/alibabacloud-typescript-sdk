// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUniRecoverableListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**, which indicates the first page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * msdb
   */
  database?: string;
  /**
   * @remarks
   * The maximum number of entries per page when using paging. Default value: 20. If you leave this parameter empty, 20 entries are returned per page by default.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the anti-ransomware backup policy for the database.
   * >You can call the [DescribeUniBackupPolicies](~~DescribeUniBackupPolicies~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  policyId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      database: 'Database',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      database: 'string',
      pageSize: 'number',
      policyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

