// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoginBaseConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **5**.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The server to which the configuration is applied. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **Target**: the UUID or group ID of the server to add or delete.
   * 
   * > If targetType is set to uuid, the value of Target is the UUID of the server. If targetType is set to groupId, the value of Target is the group ID of the server. If targetType is set to global, the value of Target is a hyphen (-).
   * 
   * *   **targetType**: the type of the server to which the configuration is applied. Valid values:
   * 
   *     *   **uuid**: a server
   *     *   **groupId**: a server group
   *     *   **global**: all servers
   * 
   * @example
   * [ {"target": "inet-7c676676-06fa-442e-90fb-b802e5d6****", "targetType": "uuid" } ]
   */
  target?: string;
  /**
   * @remarks
   * The logon type of the configuration to query. Valid values:
   * 
   * *   **login_common_location**: common logon location
   * *   **login_common_ip**: common logon IP address
   * *   **login_common_time**: common logon time range
   * *   **login_common_account**: common logon account
   * 
   * This parameter is required.
   * 
   * @example
   * login_common_location
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      target: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

