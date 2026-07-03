// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PostEventWhiteruleListRequest extends $dara.Model {
  /**
   * @remarks
   * The globally unique ID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The region where the threat analysis feature is deployed. Select the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: For assets in the Chinese mainland or China (Hong Kong).
   * 
   * - ap-southeast-1: For assets in regions outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of a member account. An administrator can use this parameter to switch to the perspective of the member account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The account scope to which the rule applies. Valid values:
   * 
   * - 0: The current Alibaba Cloud account.
   * 
   * - 1: All accounts within the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The alert whitelisting rule, which is a JSON object.
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

