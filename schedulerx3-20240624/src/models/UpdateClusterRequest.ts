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
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * qianxi-test-0812
   */
  clusterName?: string;
  /**
   * @remarks
   * The instance-level IP whitelist.
   * 
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

