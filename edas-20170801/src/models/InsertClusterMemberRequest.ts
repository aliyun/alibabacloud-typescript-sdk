// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertClusterMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster into which you want to import ECS instances.
   * 
   * This parameter is required.
   * 
   * @example
   * b3e3f77b-462e-****-****-bec8727a4dc8
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the ECS instance that you want to import into the cluster. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * i-2ze7s2v0b789k60p****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The logon password of the ECS instance that you want to import into the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * YourPassword
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
      instanceIds: 'instanceIds',
      password: 'password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceIds: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

