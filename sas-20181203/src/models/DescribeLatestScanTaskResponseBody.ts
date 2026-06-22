// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLatestScanTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the most recent scan, in milliseconds.
   * 
   * @example
   * 1671610264000
   */
  lastCheckTime?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42XXXXXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The number of virus risks detected on the server.
   * 
   * @example
   * 1
   */
  riskNum?: number;
  /**
   * @remarks
   * The asset information scanned by the virus scan node. This parameter is expressed as a character string converted from a JSON array. The following fields are included:
   * - **type**: The Asset Type on which the virus scan is executed. Valid values:
   *     - **groupId**: server group.
   *     - **uuid**: server.
   * - **name**: The name of the server group or server.
   * - **target**: The asset on which the virus scan is executed. The following describes the values of this field:
   *     - If **type** is set to **groupId**, this field specifies the server group ID.
   *     - If **type** is set to **uuid**, this field specifies the UUID of the server.
   * 
   * @example
   * [{"type":"uuid","name":"Host001","target":"503201a7-14c6-4280-801b-1169ed42****"}]
   */
  targetInfo?: string;
  /**
   * @remarks
   * The list of UUIDs of the assets.
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

