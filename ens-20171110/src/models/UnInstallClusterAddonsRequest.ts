// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnInstallClusterAddonsRequestAddons extends $dara.Model {
  /**
   * @remarks
   * The name of the add-on.
   * 
   * @example
   * edge-csi-lite
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UnInstallClusterAddonsRequest extends $dara.Model {
  /**
   * @remarks
   * The add-on information.
   */
  addons?: UnInstallClusterAddonsRequestAddons[];
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * The target cluster must be in the running state. You can call DescribeClustersV1 to query the cluster state.
   * 
   * This parameter is required.
   * 
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      addons: 'Addons',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addons: { 'type': 'array', 'itemType': UnInstallClusterAddonsRequestAddons },
      clusterId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addons)) {
      $dara.Model.validateArray(this.addons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

