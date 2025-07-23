// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JoinClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster-NZB9Oj5Yfd8Y****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the HSM that you want to add to the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * hsm-cn-vj30bil8****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

