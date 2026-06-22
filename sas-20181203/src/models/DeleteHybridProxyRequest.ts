// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHybridProxyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the proxy cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * IDC-代理
   */
  clusterName?: string;
  /**
   * @remarks
   * The UUID of the proxy server to delete. The value starts with inet-proxy-.
   * 
   * This parameter is required.
   * 
   * @example
   * inet-proxy-d2d94e8b-bb25-4744-8004-1e08a53c****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

