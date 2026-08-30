// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDomainAccessLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The action taken upon a rule hit. Exact match is used. Valid values:
   * 
   * - Audit: Audit.
   * - Observe: Observe only.
   * - WhiteList: Allowed by whitelist.
   * - Block: Blocked.
   * - Redirect: Redirected to a prompt page.
   * 
   * @example
   * Block
   */
  blockAction?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The department. Exact match is used.
   * 
   * @example
   * IT department
   */
  department?: string;
  /**
   * @remarks
   * The end time of the query. This value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1754956800
   */
  endTime?: number;
  /**
   * @remarks
   * The number of entries per page in paging. Valid values: 1 to 1000.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The policy type used to filter results.
   * 
   * @example
   * la_domain_white
   */
  policyType?: string;
  /**
   * @remarks
   * The destination domain name accessed. Exact match is used.
   * 
   * @example
   * www.example.com
   */
  remoteHost?: string;
  /**
   * @remarks
   * The start time of the query. This value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1754870400
   */
  startTime?: number;
  /**
   * @remarks
   * The username. Exact match is used.
   * 
   * @example
   * zhangsan
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      blockAction: 'BlockAction',
      currentPage: 'CurrentPage',
      department: 'Department',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      policyType: 'PolicyType',
      remoteHost: 'RemoteHost',
      startTime: 'StartTime',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockAction: 'string',
      currentPage: 'number',
      department: 'string',
      endTime: 'number',
      pageSize: 'number',
      policyType: 'string',
      remoteHost: 'string',
      startTime: 'number',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

