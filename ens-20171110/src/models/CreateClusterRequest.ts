// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The version of the cluster.
   * 
   * @example
   * 1.18.8
   */
  clusterVersion?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * mycluster-1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clusterVersion: 'ClusterVersion',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterVersion: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

