// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceRamRoleResponseBodyInstanceRamRoleSetsInstanceRamRoleSet } from "./DescribeInstanceRamRoleResponseBodyInstanceRamRoleSetsInstanceRamRoleSet";


export class DescribeInstanceRamRoleResponseBodyInstanceRamRoleSets extends $dara.Model {
  instanceRamRoleSet?: DescribeInstanceRamRoleResponseBodyInstanceRamRoleSetsInstanceRamRoleSet[];
  static names(): { [key: string]: string } {
    return {
      instanceRamRoleSet: 'InstanceRamRoleSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRamRoleSet: { 'type': 'array', 'itemType': DescribeInstanceRamRoleResponseBodyInstanceRamRoleSetsInstanceRamRoleSet },
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

