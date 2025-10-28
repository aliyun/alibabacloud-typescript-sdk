// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClusterMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 52984524-****-****-85f2-a34b0e5bb521
   */
  clusterId?: string;
  /**
   * @remarks
   * The member ID of the ECS instance that you want to remove from the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * i-2zej4i2jdf3****jigng
   */
  clusterMemberId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterMemberId: 'ClusterMemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterMemberId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

