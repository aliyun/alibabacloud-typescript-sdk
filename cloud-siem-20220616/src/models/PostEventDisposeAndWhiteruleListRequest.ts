// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PostEventDisposeAndWhiteruleListRequest extends $dara.Model {
  /**
   * @remarks
   * A comma-separated list of response strategy IDs.
   * 
   * @example
   * 12,13,14
   */
  disposeStrategyIds?: string;
  /**
   * @remarks
   * A JSON object that defines the incident response configuration.
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
   * The globally unique UUID of the incident.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The UID of the incident owner.
   * 
   * @example
   * 1234567890xxxxxx
   */
  owner?: string;
  /**
   * @remarks
   * A JSON object that defines the alert recipient configuration.
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
   * The region where the Data Management service for threat analysis is deployed. Select a region based on where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Assets in the Chinese mainland or Hong Kong (China)
   * 
   * - ap-southeast-1: Assets outside China
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * A note about the incident.
   * 
   * @example
   * dealed
   */
  remark?: string;
  /**
   * @remarks
   * The source of the response policy.
   * 
   * @example
   * system
   */
  responseSource?: string;
  /**
   * @remarks
   * The UID of the member whose perspective an administrator switches to.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * 
   * - 0: Current Alibaba Cloud account view
   * 
   * - 1: View for all accounts in your enterprise
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The incident status. Valid values:
   * 
   * - 0: Not handled
   * 
   * - 1: Handling
   * 
   * - 5: Failed
   * 
   * - 10: Handled
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The threat level. Valid values:
   * 
   * - serious: Important
   * 
   * - suspicious: Medium
   * 
   * - remind: Low
   * 
   * @example
   * remind
   */
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

