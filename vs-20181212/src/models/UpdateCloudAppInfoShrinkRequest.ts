// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudAppInfoShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud application ID, which corresponds to a unique application package.
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
   * For testing purposes
   */
  description?: string;
  /**
   * @remarks
   * The information about the patch package to upload.
   * 1. Not supported when PkgType is set to android.
   * 2. Only one patch can be in the uploading state at a time for the same AppId (only one patch in a non-final state is allowed per AppId).
   */
  patchShrink?: string;
  /**
   * @remarks
   * The cloud application labels. You can select multiple labels. This operation resets the cloud application labels.
   * 1. Valid values:
   *   a. hot
   *   b. game
   *   c. app
   * 2. Special cases:
   *   a. To delete all labels, set this parameter to ["NULL"].
   */
  pkgLabelsShrink?: string;
  /**
   * @remarks
   * The stable PatchId. When a PatchId is not specified during business operations (such as session startup), this PatchId is used by default. Not supported when PkgType is set to android.
   * Special values:
   * 1. origin: cancels the patch version and uses the initial version by default.
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

