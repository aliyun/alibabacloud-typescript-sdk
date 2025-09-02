// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgWhiteListAddOrUpdateRequestWhiteLists extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. If you enter null, the whitelist is valid permanently.
   * 
   * @example
   * null
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the data masking whitelist.
   * 
   * *   If you do not configure this parameter, the current operation is to add a data masking whitelist.
   * *   If you configure this parameter, the current operation is to modify a data masking whitelist. You can call the [DsgWhiteListQueryList](https://help.aliyun.com/document_detail/2786508.html) operation to query the whitelist ID.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The ID of the data masking rule. You can call the [DsgDesensPlanQueryList](https://help.aliyun.com/document_detail/2786578.html) operation to query the ID of the data masking rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  ruleId?: number;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-04-10 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * A collection of user group IDs.
   * 
   * This parameter is required.
   */
  userGroupIds?: number[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      id: 'Id',
      ruleId: 'RuleId',
      startTime: 'StartTime',
      userGroupIds: 'UserGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      id: 'number',
      ruleId: 'number',
      startTime: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DsgWhiteListAddOrUpdateRequest extends $dara.Model {
  /**
   * @remarks
   * A collection of whitelists.
   * 
   * This parameter is required.
   */
  whiteLists?: DsgWhiteListAddOrUpdateRequestWhiteLists[];
  static names(): { [key: string]: string } {
    return {
      whiteLists: 'WhiteLists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteLists: { 'type': 'array', 'itemType': DsgWhiteListAddOrUpdateRequestWhiteLists },
    };
  }

  validate() {
    if(Array.isArray(this.whiteLists)) {
      $dara.Model.validateArray(this.whiteLists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

