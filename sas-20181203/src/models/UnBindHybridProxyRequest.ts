// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnBindHybridProxyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the proxy cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * proxy-test
   */
  clusterName?: string;
  /**
   * @remarks
   * The UUIDs of the servers that you want to remove from the proxy cluster.
   * 
   * This parameter is required.
   */
  yundunUuids?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      yundunUuids: 'YundunUuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      yundunUuids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.yundunUuids)) {
      $dara.Model.validateArray(this.yundunUuids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

