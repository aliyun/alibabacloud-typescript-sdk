// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudAppInfoShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cap-b06b26edfhytbn b94a75ae1a79efc90eb
   */
  appId?: string;
  description?: string;
  patchShrink?: string;
  pkgLabelsShrink?: string;
  /**
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

