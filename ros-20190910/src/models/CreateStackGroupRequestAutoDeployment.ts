// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStackGroupRequestAutoDeployment extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic deployment is enabled.
   * 
   * Valid values:
   * 
   * *   true: Automatic deployment is enabled. If you add a member account to the folder to which the stack group belongs after you enable automatic deployment, ROS automatically adds the stacks in the stack group to the member account. If you remove a member account from the folder, ROS automatically deletes the stacks from the member account.
   * *   false: Automatic deployment is disabled. After you disable automatic deployment, the stacks remain unchanged when you add member accounts to or remove member accounts from the folder.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Indicates whether the stacks within a member account are retained when you remove the member account from the folder.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * > You must specify RetainStacksOnAccountRemoval if Enabled is set to true.
   * 
   * @example
   * true
   */
  retainStacksOnAccountRemoval?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      retainStacksOnAccountRemoval: 'RetainStacksOnAccountRemoval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      retainStacksOnAccountRemoval: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

