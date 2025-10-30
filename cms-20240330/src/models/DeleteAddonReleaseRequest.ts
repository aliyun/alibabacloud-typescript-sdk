// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAddonReleaseRequest extends $dara.Model {
  /**
   * @remarks
   * Addon name. When AddonName is provided, it will ignore the ReleaseName parameter and batch uninstall all AddonReleases belonging to the same Addon.
   * 
   * @example
   * cs-gpu
   */
  addonName?: string;
  /**
   * @remarks
   * Whether to force deletion, default is false.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The name of the AddonRelease.
   * 
   * @example
   * test-gpu-integration-name
   */
  releaseName?: string;
  static names(): { [key: string]: string } {
    return {
      addonName: 'addonName',
      force: 'force',
      releaseName: 'releaseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      force: 'boolean',
      releaseName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

