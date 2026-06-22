// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUniBackupPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number from which to start displaying query results. Default value: **1**, which indicates that query results are displayed starting from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries to display per page for a paginated query. The default number of entries per page is 20. If the PageSize parameter is left empty, 20 entries are returned by default.
   * > We recommend that you do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the database anti-ransomware backup policy.
   * 
   * @example
   * auto_oracle_Hpm
   */
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      policyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

