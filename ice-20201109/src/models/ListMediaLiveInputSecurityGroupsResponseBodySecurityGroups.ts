// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaLiveInputSecurityGroupsResponseBodySecurityGroups extends $dara.Model {
  /**
   * @remarks
   * The time when the security group was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-12-03T06:56:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The IDs of the inputs associated with the security group.
   */
  inputIds?: string[];
  /**
   * @remarks
   * The security group name.
   * 
   * @example
   * mysg
   */
  name?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * SEGK5KA6KYKAWQQH
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The security group rules.
   */
  whitelistRules?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      inputIds: 'InputIds',
      name: 'Name',
      securityGroupId: 'SecurityGroupId',
      whitelistRules: 'WhitelistRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      inputIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      securityGroupId: 'string',
      whitelistRules: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.inputIds)) {
      $dara.Model.validateArray(this.inputIds);
    }
    if(Array.isArray(this.whitelistRules)) {
      $dara.Model.validateArray(this.whitelistRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

