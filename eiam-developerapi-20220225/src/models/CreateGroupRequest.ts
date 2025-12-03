// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The external ID.
   * 
   * @example
   * group_2bo6lefcewdausyyxxxx
   */
  groupExternalId?: string;
  /**
   * @remarks
   * The organization name.
   * 
   * This parameter is required.
   * 
   * @example
   * name001
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupExternalId: 'groupExternalId',
      groupName: 'groupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupExternalId: 'string',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

