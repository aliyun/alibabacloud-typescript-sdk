// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAclGroupCidrsRequest extends $dara.Model {
  groupName?: string;
  /**
   * @example
   * c-xxxx
   */
  instanceId?: string;
  /**
   * @example
   * 140.205.11.0/24,140.205.11.2
   */
  newCidrs?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      instanceId: 'instanceId',
      newCidrs: 'newCidrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      instanceId: 'string',
      newCidrs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

