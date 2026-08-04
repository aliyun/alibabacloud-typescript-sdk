// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * The address of the private access application. The address must be 1 to 128 characters in length. It supports IPv4 addresses, CIDR blocks, domain names, and wildcard domain names. Fuzzy search is supported.
   * 
   * @example
   * sase.alibaba.com
   */
  address?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the private access application. The name must be 1 to 128 characters in length. It can contain Chinese characters, letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * private_access_application_name
   */
  name?: string;
  /**
   * @remarks
   * The number of entries per page for pagination. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
      saseUserId: 'SaseUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
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

