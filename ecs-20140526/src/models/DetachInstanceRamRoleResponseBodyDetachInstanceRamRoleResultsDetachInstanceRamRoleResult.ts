// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResultsDetachInstanceRamRoleResultInstanceRamRoleSets } from "./DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResultsDetachInstanceRamRoleResultInstanceRamRoleSets";


export class DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResultsDetachInstanceRamRoleResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the instance RAM role was detached. If 200 is returned, the instance RAM role was detached. If any other value is returned, the instance RAM role failed to be detached. For more information, see the "Error codes" section.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the ECS instance from which you attempted to detach the instance RAM role.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance RAM role and the ID of the ECS instance.
   */
  instanceRamRoleSets?: DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResultsDetachInstanceRamRoleResultInstanceRamRoleSets;
  /**
   * @remarks
   * Indicates whether the instance RAM role was detached. If success is returned, the instance RAM role was detached. If any other value is returned, the instance RAM role failed to be detached. For more information, see the "Error codes" section.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the instance RAM role was detached.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      instanceRamRoleSets: 'InstanceRamRoleSets',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      instanceRamRoleSets: DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResultsDetachInstanceRamRoleResultInstanceRamRoleSets,
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.instanceRamRoleSets && typeof (this.instanceRamRoleSets as any).validate === 'function') {
      (this.instanceRamRoleSets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

