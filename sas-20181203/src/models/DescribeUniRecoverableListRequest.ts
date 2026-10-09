// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUniRecoverableListRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page from which query results start to be displayed. Default value: **1**. This value indicates that the results start from page 1.
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
   * The maximum number of entries to display per page in a paged query. The default number of entries per page is 20. If PageSize is left empty, 20 entries are returned by default.
   * > Set PageSize to a non-empty value.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the anti-ransomware backup policy for the database.
   * >Call the [DescribeUniBackupPolicies](~~DescribeUniBackupPolicies~~) operation to obtain this parameter.
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

