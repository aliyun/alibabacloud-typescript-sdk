// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertCollectionPolicyRequestResourceDirectory extends $dara.Model {
  /**
   * @remarks
   * The mode of the resource directory. Valid values: all and custom.
   * 
   * @example
   * all,custom
   */
  accountGroupType?: string;
  /**
   * @remarks
   * The members. If accountGroupType is set to custom, the members are returned.
   */
  members?: string[];
  static names(): { [key: string]: string } {
    return {
      accountGroupType: 'accountGroupType',
      members: 'members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountGroupType: 'string',
      members: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

