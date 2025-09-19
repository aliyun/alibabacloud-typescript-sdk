// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallHybridProxyRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * proxy-test
   */
  clusterName?: string;
  /**
   * @remarks
   * The installation code.
   * 
   * @example
   * Z9c8SA
   */
  installCode?: string;
  /**
   * @remarks
   * The UUIDs of the proxy servers.
   */
  yundunUuids?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      installCode: 'InstallCode',
      yundunUuids: 'YundunUuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      installCode: 'string',
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

