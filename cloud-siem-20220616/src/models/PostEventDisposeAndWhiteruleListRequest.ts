// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PostEventDisposeAndWhiteruleListRequest extends $dara.Model {
  disposeStrategyIds?: string;
  /**
   * @remarks
   * The configuration of event handling. The value is a JSON object.
   * 
   * @example
   * [
   *       {
   *             "playbookName": "WafBlockIP",
   *             "entityId": "104466118",
   *             "scope": [
   *                   "176618589410****"
   *             ],
   *             "startTime": 1604168946281,
   *             "endTime": 1614168946281
   *       },
   *       {
   *             "playbookName": "WafBlockIP",
   *             "entityId": "104466118",
   *             "scope": [
   *                   {
   *                         "instanceId": "waf-cn-n6w1oy1****",
   *                         "domains": [
   *                               "lmfip.wafqax.***"
   *                         ]
   *                   }
   *             ],
   *             "startTime": 1604168946281,
   *             "endTime": 1614168946281
   *       }
   * ]
   */
  eventDispose?: string;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @example
   * 1234567890xxxxxx
   */
  owner?: string;
  /**
   * @remarks
   * The configuration of the alert recipient. The value is a JSON object.
   * 
   * @example
   * {
   *       "messageTitle": "test",
   *       "receiver": "xiaowang",
   *       "channel": "message"
   * }
   */
  receiverInfo?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks of the event.
   * 
   * @example
   * dealed
   */
  remark?: string;
  responseSource?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The status of the event. Valid values:
   * 
   * *   0: unhandled
   * *   1: handing
   * *   5: handling failed
   * *   10: handled
   * 
   * @example
   * 0
   */
  status?: number;
  threatLevel?: string;
  static names(): { [key: string]: string } {
    return {
      disposeStrategyIds: 'DisposeStrategyIds',
      eventDispose: 'EventDispose',
      incidentUuid: 'IncidentUuid',
      owner: 'Owner',
      receiverInfo: 'ReceiverInfo',
      regionId: 'RegionId',
      remark: 'Remark',
      responseSource: 'ResponseSource',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      status: 'Status',
      threatLevel: 'ThreatLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disposeStrategyIds: 'string',
      eventDispose: 'string',
      incidentUuid: 'string',
      owner: 'string',
      receiverInfo: 'string',
      regionId: 'string',
      remark: 'string',
      responseSource: 'string',
      roleFor: 'number',
      roleType: 'number',
      status: 'number',
      threatLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

