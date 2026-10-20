// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterKubeConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is essentially required. If it is not provided, the service returns BadRequest. The target cluster must also have completed control plane deployment and certificate generation. You cannot obtain the kubeconfig for a cluster in the initial state.
   * 
   * @example
   * c8f0377146d104687ac562eef9403****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

