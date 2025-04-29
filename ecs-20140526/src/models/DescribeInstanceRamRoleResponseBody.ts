// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceRamRoleResponseBodyInstanceRamRoleSets } from "./DescribeInstanceRamRoleResponseBodyInstanceRamRoleSets";


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

