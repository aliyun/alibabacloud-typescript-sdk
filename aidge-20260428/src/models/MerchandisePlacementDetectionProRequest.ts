// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MerchandisePlacementDetectionProRequest extends $dara.Model {
  /**
   * @remarks
   * The HTTPS URL of the display image to detect.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/image.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The detection rule. When non-empty, this value takes priority as the model prompt.
   * 
   * @example
   * Identify all Genki Forest beverages on the shelf and mark their positions
   */
  rule?: string;
  /**
   * @remarks
   * The product type. This parameter must be set to Genki Forest when Rule is empty.
   * 
   * @example
   * 元气森林
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      rule: 'Rule',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      rule: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

