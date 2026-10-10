// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterBatchRenewMemberApiKeysRequest extends $dara.Model {
  /**
   * @remarks
   * The new expiration time in RFC 3339 format. The time must be later than the current time. If this parameter is not provided or is set to null, the API keys remain permanently valid. This parameter only modifies the validity period and does not change the enabled or disabled status.
   * 
   * @example
   * 2027-01-01T00:00:00+08:00
   */
  expireAt?: string;
  /**
   * @remarks
   * The list of member user IDs. This operation renews all undeleted API keys of these members in the specified department.
   * 
   * This parameter is required.
   * 
   * @example
   * []
   */
  userIds?: number[];
  static names(): { [key: string]: string } {
    return {
      expireAt: 'expireAt',
      userIds: 'userIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireAt: 'string',
      userIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

