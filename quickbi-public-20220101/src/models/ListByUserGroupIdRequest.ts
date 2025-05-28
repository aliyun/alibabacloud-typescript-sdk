// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListByUserGroupIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user group that you want to query. Separate multiple user groups with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 34fe-***-6dcb,84q9-****-4a274
   */
  userGroupIds?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupIds: 'UserGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

