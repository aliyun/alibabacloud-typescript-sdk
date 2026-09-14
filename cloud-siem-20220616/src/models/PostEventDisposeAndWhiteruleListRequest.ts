// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PostEventDisposeAndWhiteruleListRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426614174000
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of handling policy IDs.
   * 
   * @example
   * 12,13,14
   */
  disposeStrategyIds?: string;
  /**
   * @remarks
   * The incident handling configuration as a JSON object.
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
   * The account UID of the incident owner.
   * 
   * @example
   * 1234567890xxxxxx
   */
  owner?: string;
  /**
   * @remarks
   * The alert recipient configuration as a JSON object.
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
   * The region where the threat analysis data management center resides. Specify the management center based on the region of your assets. Valid values:
   * - cn-hangzhou: Your assets reside in regions in the Chinese mainland or China (Hong Kong).
   * - ap-southeast-1: Your assets reside in regions outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks for the incident.
   * 
   * @example
   * dealed
   */
  remark?: string;
  /**
   * @remarks
   * The source of the handling policy.
   * 
   * @example
   * system
   */
  responseSource?: string;
  /**
   * @remarks
   * The ID of the user for whom the administrator switches to a member view.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * 
   * - 0: the China account view.
   * - 1: the view of all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The incident status. Valid values:
   * 
   * - 0: unhandled  
   * - 1: handling 
   * - 5: handling failed 
   * - 10: handled
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * Specifies whether to restore associated handled alerts to unhandled status when reopening the incident.
   */
  syncAlertStatus?: boolean;
  /**
   * @remarks
   * The threat level. Valid values:
   * - serious: high
   * - suspicious: medium
   * - remind: low
   * 
   * @example
   * remind
   */
  threatLevel?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
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
      syncAlertStatus: 'SyncAlertStatus',
      threatLevel: 'ThreatLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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
      syncAlertStatus: 'boolean',
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

