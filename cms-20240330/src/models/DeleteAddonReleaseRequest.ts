// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAddonReleaseRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the add-on. If you specify this parameter, the ReleaseName parameter is ignored and all AddonReleases that belong to the add-on are uninstalled in a batch.
   * 
   * @example
   * cs-gpu
   */
  addonName?: string;
  /**
   * @remarks
   * Specifies whether to forcibly delete the add-on release. The default value is false.
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

