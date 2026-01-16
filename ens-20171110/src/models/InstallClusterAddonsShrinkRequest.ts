// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallClusterAddonsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  addonsShrink?: string;
  /**
   * @remarks
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

