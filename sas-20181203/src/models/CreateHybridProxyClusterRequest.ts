// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHybridProxyClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * Chester-Test
   */
  clusterName?: string;
  /**
   * @remarks
   * The endpoint of the cluster.
   * >  You can specify an IP address or a domain name
   * 
   * @example
   * 192.168.xx.xx
   */
  ip?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * remark test
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      ip: 'Ip',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      ip: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

