// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnInstallClusterAddonsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The add-on information.
   */
  addonsShrink?: string;
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
      addonsShrink: 'Addons',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonsShrink: 'string',
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

