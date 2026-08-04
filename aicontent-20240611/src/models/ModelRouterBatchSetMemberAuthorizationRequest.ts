// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterBatchSetMemberAuthorizationRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization configuration. This parameter is a required JSON string that uses overwrite mode: {"model_ids":[...],"group_ids":["mg_xxx"]}. Internal key names use a fixed underscore style and are not converted to the camelCase convention of the API.
   * 
   * @example
   * {"model_ids":[],"group_ids":["mg_qwen_19"]}
   */
  allowedModelGroupConfig?: string;
  /**
   * @remarks
   * The list of user IDs. This parameter is required. You can specify 1 to 50 user IDs. If more than 50 user IDs are required, call this operation in batches. All users must be direct members of the specified department.
   * 
   * @example
   * [30001,30002,30003]
   */
  userIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      allowedModelGroupConfig: 'allowedModelGroupConfig',
      userIdList: 'userIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedModelGroupConfig: 'string',
      userIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.userIdList)) {
      $dara.Model.validateArray(this.userIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

