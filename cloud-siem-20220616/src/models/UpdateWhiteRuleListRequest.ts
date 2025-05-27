// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWhiteRuleListRequest extends $dara.Model {
  /**
   * @remarks
   * The alert whitelist rule. The value is a JSON object.
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
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
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
  roleFor?: number;
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

