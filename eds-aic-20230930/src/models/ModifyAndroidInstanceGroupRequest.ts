// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAndroidInstanceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * @example
   * ag-cuv4scs4obxhs****
   */
  instanceGroupId?: string;
  /**
   * @remarks
   * The new name of the instance group.
   * 
   * > 
   * 
   * *   The name can be up to 30 characters in length. It can contain letters, digits, colons (:), underscores (_), periods (.), or hyphens (-). It must start with letters but cannot start with http:// or https://.
   * 
   * @example
   * newName
   */
  newInstanceGroupName?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * pg-2w97kp89gnsif****
   */
  policyGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceGroupId: 'InstanceGroupId',
      newInstanceGroupName: 'NewInstanceGroupName',
      policyGroupId: 'PolicyGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceGroupId: 'string',
      newInstanceGroupName: 'string',
      policyGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

