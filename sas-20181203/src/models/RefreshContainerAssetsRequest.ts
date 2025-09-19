// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshContainerAssetsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the container asset whose statistics you want to refresh. Valid values:
   * 
   * *   **IMAGE**
   * *   **CONTAINER**
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

