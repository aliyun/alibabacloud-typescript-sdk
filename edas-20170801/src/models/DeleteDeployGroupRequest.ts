// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDeployGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 3616cdca-4f92-4413-b31*************
   */
  appId?: string;
  /**
   * @remarks
   * The name of the instance group.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
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

