// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddonRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * edge-csi-lite
   */
  addonName?: string;
  /**
   * @example
   * v1
   */
  addonVersion?: string;
  static names(): { [key: string]: string } {
    return {
      addonName: 'AddonName',
      addonVersion: 'AddonVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      addonVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

