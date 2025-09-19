// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHybridProxyClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the proxy cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * proxy
   */
  clusterName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

