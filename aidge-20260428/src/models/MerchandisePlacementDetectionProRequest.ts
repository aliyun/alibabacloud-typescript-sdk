// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MerchandisePlacementDetectionProRequest extends $dara.Model {
  /**
   * @remarks
   * The HTTPS URL of the display image to be detected.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/image.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The detection rule. If this parameter is not empty, it is preferentially used as the model prompt.
   * 
   * @example
   * Recognize all Genki Forest beverages on the shelf and draw bounding boxes around them
   */
  rule?: string;
  /**
   * @remarks
   * The product type. If the Rule parameter is empty, you must set this parameter to Genki Forest.
   * 
   * @example
   * Genki Forest
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

