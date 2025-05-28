// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataLevelPermissionRuleUsersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"ruleId":"a5bb24da-***-a891683e14da","cubeId":"7c7223ae-***-3c744528014b","delModel":{"userGroups":["0d5fb19b-***-1248fc27ca51","3d2c23d4-***-f6390f325c2d"],"users":["4334***358","Huang***3fa822"]}}
   */
  deleteUserModel?: string;
  static names(): { [key: string]: string } {
    return {
      deleteUserModel: 'DeleteUserModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteUserModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

