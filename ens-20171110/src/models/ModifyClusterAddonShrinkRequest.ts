// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClusterAddonShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The parameter settings of the add-on.
   */
  addonShrink?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the add-on. It must reference an installed add-on in the target cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * edge-csi-lite
   */
  componentName?: string;
  static names(): { [key: string]: string } {
    return {
      addonShrink: 'Addon',
      clusterId: 'ClusterId',
      componentName: 'ComponentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonShrink: 'string',
      clusterId: 'string',
      componentName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

