// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateContactGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert contact group.
   * 
   * *   If you do not specify this parameter, an alert contact group is created.
   * *   If you specify this parameter, the specified alert contact group is modified.
   * 
   * @example
   * 123
   */
  contactGroupId?: number;
  /**
   * @remarks
   * The name of the alert contact group.
   * 
   * This parameter is required.
   * 
   * @example
   * TestGroup
   */
  contactGroupName?: string;
  /**
   * @remarks
   * The ID of the contact that you want to add to the contact group. Separate multiple IDs with commas (,).
   * 
   * @example
   * [1,2,3]
   */
  contactIds?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupId: 'ContactGroupId',
      contactGroupName: 'ContactGroupName',
      contactIds: 'ContactIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupId: 'number',
      contactGroupName: 'string',
      contactIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

