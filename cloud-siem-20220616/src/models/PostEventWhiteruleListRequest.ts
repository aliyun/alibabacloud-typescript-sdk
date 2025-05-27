// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PostEventWhiteruleListRequest extends $dara.Model {
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
  whiteruleList?: string;
  static names(): { [key: string]: string } {
    return {
      incidentUuid: 'IncidentUuid',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      whiteruleList: 'WhiteruleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidentUuid: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      whiteruleList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

