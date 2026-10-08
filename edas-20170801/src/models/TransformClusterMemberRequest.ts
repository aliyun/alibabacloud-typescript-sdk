// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformClusterMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the ECS instances. Separate multiple IDs with a comma (,).
   * 
   * - The instances must be in the same VPC as the target cluster.
   * 
   * - An instance can belong to only one cluster at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * i-2ze7s2v0b789k60p****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The logon password to set for the instances.
   * 
   * This parameter is required.
   * 
   * @example
   * Hello****
   */
  password?: string;
  /**
   * @remarks
   * The ID of the target cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * b3e3f77b-462e-****-****-bec8727a****
   */
  targetClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      password: 'Password',
      targetClusterId: 'TargetClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      password: 'string',
      targetClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

