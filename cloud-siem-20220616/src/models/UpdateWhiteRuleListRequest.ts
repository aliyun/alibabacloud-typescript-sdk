// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWhiteRuleListRequest extends $dara.Model {
  /**
   * @remarks
   * The alert whitelist rule. This is a JSON object.
   * 
   * This parameter is required.
   * 
   * @example
   * [
   *       {
   *             "alertName": "webshell",
   *             "alertNameId": "webshell",
   *             "alertType": "command",
   *             "alertTypeId": "command",
   *             "expression": {
   *                   "status": 1,
   *                   "conditions": [
   *                         {
   *                               "isNot": false,
   *                               "left": {
   *                                     "value": "file_path"
   *                               },
   *                               "operator": "gt",
   *                               "right": {
   *                                     "value": "cp"
   *                               }
   *                         }
   *                   ]
   *             }
   *       }
   * ]
   */
  expression?: string;
  /**
   * @remarks
   * The global unique ID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The region of the Data Management center for threat analysis. Select a region for the Data Management center based on the region of your assets. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland or China (Hong Kong).
   * 
   * - ap-southeast-1: Your assets are outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member. This parameter is used when an administrator switches to the perspective of a member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type.
   * 
   * - 0: The view of the current Alibaba Cloud account.
   * 
   * - 1: The view of all accounts that belong to the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The unique ID of the whitelist rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789
   */
  whiteRuleId?: number;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      incidentUuid: 'IncidentUuid',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      whiteRuleId: 'WhiteRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      incidentUuid: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      whiteRuleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

