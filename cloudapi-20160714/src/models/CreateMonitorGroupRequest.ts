// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMonitorGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The caller authentication status of the API. Valid values: **ok**: The authentication is successful. **mismatch**: The request is redirected. **servicenotfound**: A request error occurred. **Unknown**: An unknown error occurred.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  auth?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * This parameter is required.
   * 
   * @example
   * 6735211ab9094c818f32f27bc545b6c8
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the monitoring group.
   * 
   * @example
   * 166636221
   */
  rawMonitorGroupId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      auth: 'Auth',
      groupId: 'GroupId',
      rawMonitorGroupId: 'RawMonitorGroupId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth: 'string',
      groupId: 'string',
      rawMonitorGroupId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

