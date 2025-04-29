// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResultsDetachInstanceRamRoleResultInstanceRamRoleSetsInstanceRamRoleSet } from "./DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResultsDetachInstanceRamRoleResultInstanceRamRoleSetsInstanceRamRoleSet";


export class DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResultsDetachInstanceRamRoleResultInstanceRamRoleSets extends $dara.Model {
  instanceRamRoleSet?: DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResultsDetachInstanceRamRoleResultInstanceRamRoleSetsInstanceRamRoleSet[];
  static names(): { [key: string]: string } {
    return {
      instanceRamRoleSet: 'InstanceRamRoleSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRamRoleSet: { 'type': 'array', 'itemType': DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResultsDetachInstanceRamRoleResultInstanceRamRoleSetsInstanceRamRoleSet },
    };
  }

  validate() {
    if(Array.isArray(this.instanceRamRoleSet)) {
      $dara.Model.validateArray(this.instanceRamRoleSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

