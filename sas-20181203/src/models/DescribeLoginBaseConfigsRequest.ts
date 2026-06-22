// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoginBaseConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Settings for paged query. The number of logon configuration entries to display on each page when paging is used. Default value: **5**.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The selection mode for the assets on which the policy takes effect. This parameter is in JSON format and contains the following fields:
   * 
   * - **Target**: The UUID of the server to add or delete, or the ID of the server group.
   * 
   * > If the targetType parameter is set to uuid, this parameter specifies the UUID of the server. If the targetType parameter is set to groupId, this parameter specifies the ID of the server group. If the targetType parameter is set to global, set this parameter to a hyphen (-).
   * 
   * - **targetType**: The selection mode for the assets on which the policy takes effect. Valid values:
   *     - **uuid**: queries by individual server.
   *     - **groupId**: queries by server group.
   *     - **global**: queries all servers.
   * 
   * @example
   * [ {"target": "inet-7c676676-06fa-442e-90fb-b802e5d6****", "targetType": "uuid" } ]
   */
  target?: string;
  /**
   * @remarks
   * The type of logon configuration to query. Valid values:
   * - **login_common_location**: common logon location.
   * - **login_common_ip**: common logon IP address.
   * - **login_common_time**: common logon time.
   * - **login_common_account**: common logon account.
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

