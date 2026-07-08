// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudAppInfoShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud application, which corresponds to a unique application package.
   * 
   * This parameter is required.
   * 
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * 用于测试使用
   */
  description?: string;
  /**
   * @remarks
   * Information about the patch package to upload.
   * 
   * 1. This parameter is not supported when PkgType is android.
   * 
   * 2. For the same AppId, only one patch can be in the process of uploading at a time. This means only one patch can be in a state other than its desired state.
   */
  patchShrink?: string;
  /**
   * @remarks
   * The tags for the cloud application. You can select multiple tags. This action resets all existing tags for the cloud application.
   * 
   * 1. Valid values:
   *    hot, game, and app.
   * 
   * 2. Special case:
   *    To delete all tags, enter ["NULL"].
   */
  pkgLabelsShrink?: string;
  /**
   * @remarks
   * The ID of the stable patch. This patch is used by default if you do not specify a PatchId when the application is in use, such as during a session startup. This parameter is not supported when PkgType is android.
   * Special value:
   * 
   * 1. If you set this parameter to origin, the patch version is removed and the initial version is used.
   * 
   * @example
   * patch-03fa76e8e13a49b6a966b063d9d309b4
   */
  stablePatchId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      description: 'Description',
      patchShrink: 'Patch',
      pkgLabelsShrink: 'PkgLabels',
      stablePatchId: 'StablePatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      description: 'string',
      patchShrink: 'string',
      pkgLabelsShrink: 'string',
      stablePatchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

