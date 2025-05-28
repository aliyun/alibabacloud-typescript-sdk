// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDataLevelPermissionRuleUsersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"ruleId":"a5bb24da-***-a891683e14da","cubeId":"7c7223ae-***-3c744528014b","addModel":{"userGroups":["0d5fb19b-***-1248fc27ca51","3d2c23d4-***-f6390f325c2d"],"users":["4334***358","Huang***3fa822"]}}
   */
  addUserModel?: string;
  static names(): { [key: string]: string } {
    return {
      addUserModel: 'AddUserModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addUserModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

