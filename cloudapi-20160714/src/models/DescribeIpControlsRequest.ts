// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpControlsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACL. The ID is unique.
   * 
   * @example
   * 7ea91319a34d48a09b5c9c871d9768b1
   */
  ipControlId?: string;
  /**
   * @remarks
   * The name of the ACL.
   * 
   * @example
   * ACL test
   */
  ipControlName?: string;
  /**
   * @remarks
   * The type of the ACL. Valid values:
   * 
   * *   **ALLOW**: a whitelist
   * *   **REFUSE**: a blacklist
   * 
   * @example
   * ALLOW
   */
  ipControlType?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ipControlId: 'IpControlId',
      ipControlName: 'IpControlName',
      ipControlType: 'IpControlType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipControlId: 'string',
      ipControlName: 'string',
      ipControlType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

