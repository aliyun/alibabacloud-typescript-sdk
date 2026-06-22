// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshContainerAssetsRequest extends $dara.Model {
  /**
   * @remarks
   * The Asset Type of the container asset to refresh. Valid values:
   * - **IMAGE**: container image.
   * - **CONTAINER**: container.
   * 
   * This parameter is required.
   * 
   * @example
   * IMAGE
   */
  assetType?: string;
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

