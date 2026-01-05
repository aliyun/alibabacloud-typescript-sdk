// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProductVersionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the product version. Valid values:
   * 
   * *   true: enables the product version. This is the default value.
   * *   false: disables the product version.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The description of the product version.
   * 
   * The value must be 1 to 128 characters in length.
   * 
   * @example
   * The description of the product version.
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @remarks
   * The recommendation information. Valid values:
   * 
   * *   Default: No recommendation information is provided. This is the default value.
   * *   Recommended: the recommended version.
   * *   Latest: the latest version.
   * *   Deprecated: the version that is about to be discontinued.
   * 
   * @example
   * Default
   */
  guidance?: string;
  /**
   * @remarks
   * The ID of the product version.
   * 
   * This parameter is required.
   * 
   * @example
   * pv-bp15e79d26****
   */
  productVersionId?: string;
  /**
   * @remarks
   * The name of the product version.
   * 
   * The value must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  productVersionName?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      description: 'Description',
      guidance: 'Guidance',
      productVersionId: 'ProductVersionId',
      productVersionName: 'ProductVersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      guidance: 'string',
      productVersionId: 'string',
      productVersionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

