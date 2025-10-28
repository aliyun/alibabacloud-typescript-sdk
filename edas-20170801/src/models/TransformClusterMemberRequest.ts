// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformClusterMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance that you want to import or migrate. Separate multiple IDs with commas (,).
   * 
   * *   An instance may not belong to a cluster, but an instance can belong to only one cluster at most.
   * *   The ECS instances and the destination cluster must be in the same virtual private cloud (VPC).
   * 
   * This parameter is required.
   * 
   * @example
   * i-2ze7s2v0b789k60p****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The logon password of the ECS instance that you want to import or migrate to the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * Hello****
   */
  password?: string;
  /**
   * @remarks
   * The ID of the destination cluster.
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

