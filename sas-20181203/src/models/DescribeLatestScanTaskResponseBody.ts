// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLatestScanTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the last check was performed. Unit: milliseconds.
   * 
   * @example
   * 1671610264000
   */
  lastCheckTime?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42XXXXXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The number of virus detection risks on the server.
   * 
   * @example
   * 1
   */
  riskNum?: number;
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
   * [{"type":"uuid","name":"Host001","target":"503201a7-14c6-4280-801b-1169ed42****"}]
   */
  targetInfo?: string;
  /**
   * @remarks
   * The UUIDs of the assets.
   */
  uuids?: string[];
  static names(): { [key: string]: string } {
    return {
      lastCheckTime: 'LastCheckTime',
      requestId: 'RequestId',
      riskNum: 'RiskNum',
      targetInfo: 'TargetInfo',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastCheckTime: 'number',
      requestId: 'string',
      riskNum: 'number',
      targetInfo: 'string',
      uuids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.uuids)) {
      $dara.Model.validateArray(this.uuids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

