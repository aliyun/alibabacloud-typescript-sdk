// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStackGroupsResponseBodyStackGroupsAutoDeployment extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic deployment is enabled.
   * 
   * Valid values:
   * 
   * *   true: Automatic deployment is enabled. If you add a member to the folder to which the stack group belongs after automatic deployment is enabled, Resource Orchestration Service (ROS) automatically adds the stack instances in the stack group to the specified region of the member. If you delete the member from the folder, ROS automatically deletes the stack instances in the stack group from the specified region of the member.
   * *   false: Automatic deployment is disabled. After you disable automatic deployment, the stack instances remain unchanged when you change the member in the folder.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Indicates whether the stacks within a member are retained when you delete the member from the folder.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * > This parameter is returned only if Enabled is set to true.
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

