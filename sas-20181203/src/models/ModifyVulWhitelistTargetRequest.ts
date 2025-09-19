// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVulWhitelistTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the whitelist.
   * 
   * >  You can call the [DescribeVulWhitelist](~~DescribeVulWhitelist~~) operation to query the IDs of whitelists.
   * 
   * This parameter is required.
   * 
   * @example
   * 2533681
   */
  id?: number;
  /**
   * @remarks
   * The reason why you add the server to the whitelist.
   * 
   * @example
   * 1221
   */
  reason?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 42.120.75.150
   */
  sourceIp?: string;
  /**
   * @remarks
   * The applicable scope of the whitelist. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **type**: the type of the applicable scope. Valid values:
   * 
   *     *   **GroupId**: the ID of a server group
   *     *   **Uuid**: the UUID of a server
   * 
   * *   **uuids**: the UUIDs of servers
   * 
   * *   **groupIds**: the IDs of server groups
   * 
   * >  If you leave this parameter empty, all servers are added to the whitelist. If you set the **type** field to **GroupId**, you must also specify the **groupIds** field. If you set the **type** field to **Uuid**, you must also specify the **uuids** field.
   * 
   * @example
   * {
   *       "type": "GroupId",
   *       "uuids": [],
   *       "groupIds": [
   *             10782678
   *       ]
   * }
   */
  targetInfo?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      reason: 'Reason',
      sourceIp: 'SourceIp',
      targetInfo: 'TargetInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      reason: 'string',
      sourceIp: 'string',
      targetInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

