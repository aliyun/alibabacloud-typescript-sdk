// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterBatchCreateMemberApiKeysRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration time in RFC 3339 format. This parameter is optional. If not specified, the key is permanently valid.
   * 
   * @example
   * 2027-01-01T00:00:00Z
   */
  expireAt?: string;
  /**
   * @remarks
   * The key name. This parameter is optional.
   * 
   * @example
   * TestKey
   */
  name?: string;
  /**
   * @remarks
   * The list of member user IDs.
   * 
   * @example
   * []
   */
  userIds?: number[];
  static names(): { [key: string]: string } {
    return {
      expireAt: 'expireAt',
      name: 'name',
      userIds: 'userIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireAt: 'string',
      name: 'string',
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

