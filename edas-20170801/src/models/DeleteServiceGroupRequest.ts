// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteServiceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the service group that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * 789d9cda-74b1-****-****-05e21a0a7661
   */
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

