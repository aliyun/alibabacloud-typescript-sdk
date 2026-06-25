// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-c20f7ec9a78
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * xx-test-1107
   */
  clusterName?: string;
  /**
   * @example
   * 192.168.1.0/24
   */
  ipWhitelist?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      ipWhitelist: 'IpWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      ipWhitelist: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

