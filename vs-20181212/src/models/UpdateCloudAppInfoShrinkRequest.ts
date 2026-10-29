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
   * Used for testing
   */
  description?: string;
  /**
   * @remarks
   * The information about the patch package to be uploaded. 1. This parameter is not supported when PkgType is set to android. 2. Only one patch package can be in the uploading state (non-final state) for the same AppId at a time.
   */
  patchShrink?: string;
  /**
   * @remarks
   * The tags of the cloud application. You can specify multiple tags to reset the cloud application tags. Valid values:
   * - hot
   * - game
   * - app
   * To delete all tags, set the value to ["NULL"].
   */
  pkgLabelsShrink?: string;
  /**
   * @remarks
   * The ID of the stable patch. This is the default patch ID used in customer business scenarios, such as session startup, when no patch ID is specified. This parameter is not supported when PkgType is set to android. Special value: origin: cancels the patch version and uses the initial version by default.
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

