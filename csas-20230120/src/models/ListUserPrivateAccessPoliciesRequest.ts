// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserPrivateAccessPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * Current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Intranet access policy name. Length should be between 1 to 128 characters, supporting Chinese and case-sensitive English letters, and can include numbers, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @remarks
   * Number of items per page for pagination. Range: 1~100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * User ID.
   * 
   * This parameter is required.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
      saseUserId: 'SaseUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      name: 'string',
      pageSize: 'number',
      saseUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

