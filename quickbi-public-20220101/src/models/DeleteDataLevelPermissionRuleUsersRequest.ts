// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataLevelPermissionRuleUsersRequest extends $dara.Model {
  /**
   * @remarks
   * {
   * "ruleId": "a5bb24da-***-a891683e14da", // The ID of the row-level permission rule.
   * "cubeId": "7c7223ae-***-3c744528014b", // The ID of the dataset.
   * "delModel": {
   * "userGroups": [
   * "0d5fb19b-***-1248fc27ca51", // The ID of the user group to remove.
   * "3d2c23d4-***-f6390f325c2d"
   * ],
   * "users": [
   * "433&#x34;***358", // The ID of the user to remove.
   * "Huang***&#x33;fa822"
   * ]
   * }
   * }
   * 
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

