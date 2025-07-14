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

export class DescribeInstanceRamRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the ECS instances and the names of the corresponding instance RAM roles.
   */
  instanceRamRoleSets?: DescribeInstanceRamRoleResponseBodyInstanceRamRoleSets;
  /**
   * @remarks
   * The region ID of the ECS instances.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The number of ECS instances returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceRamRoleSets: 'InstanceRamRoleSets',
      regionId: 'RegionId',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRamRoleSets: DescribeInstanceRamRoleResponseBodyInstanceRamRoleSets,
      regionId: 'string',
      requestId: 'string',
      totalCount: 'number',
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

