// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAddonReleaseRequest extends $dara.Model {
  /**
   * @remarks
   * The addon name. If AddonName is specified, the ReleaseName parameter is ignored and all AddonRelease instances that belong to the same addon are uninstalled in a batch.
   * 
   * @example
   * cs-gpu
   */
  addonName?: string;
  /**
   * @remarks
   * Specifies whether to force delete the addon release. Default value: false.
   * 
   * @example
   * false
   * 
   * @deprecated
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

