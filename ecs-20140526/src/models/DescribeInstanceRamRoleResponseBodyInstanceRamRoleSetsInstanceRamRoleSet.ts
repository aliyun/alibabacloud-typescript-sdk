// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceRamRoleResponseBodyInstanceRamRoleSetsInstanceRamRoleSet extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance RAM role.
   * 
   * @example
   * EcsServiceRole-EcsDocGuideTest
   */
  ramRoleName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ramRoleName: 'RamRoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ramRoleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

