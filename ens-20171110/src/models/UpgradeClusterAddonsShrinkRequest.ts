// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeClusterAddonsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The add-on information.
   */
  addonsShrink?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * eck-xxxxxxxxx
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

