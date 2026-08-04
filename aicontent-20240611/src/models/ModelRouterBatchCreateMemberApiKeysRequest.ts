// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterBatchCreateMemberApiKeysRequest extends $dara.Model {
  /**
   * @example
   * 2027-01-01T00:00:00Z
   */
  expireAt?: string;
  /**
   * @example
   * TestKey
   */
  name?: string;
  /**
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

