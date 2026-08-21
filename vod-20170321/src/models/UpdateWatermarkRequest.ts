// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWatermarkRequest extends $dara.Model {
  /**
   * @remarks
   * The new name of the watermark template.
   * - Only Chinese characters, letters, and digits are supported.
   * - The name can be up to 128 bytes in length.
   * - UTF-8 encoding.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The configuration information of the image and text watermark (JSON character string), including the watermark display position and watermark effect. The configuration parameters for image watermarks and text watermarks are different. For details about the parameter structure, see [WatermarkConfig](~~98618#section-h01-44s-2lr~~).
   * >Modifying across templatetypes is not supported. You can invoke the [GetWatermark](~~GetWatermark~~) operation to query the type of the watermark template before modifying the configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Width":"55","Height":"55","Dx":"9","Dy":"9","ReferPos":"BottomLeft"}
   */
  watermarkConfig?: string;
  /**
   * @remarks
   * The ID of the image and text watermark template to modify. Only a single watermark template ID is supported. You can obtain the ID by using one of the following methods:
   * - The ID is returned after you call the [AddWatermark](~~AddWatermark~~) operation to add an image and text watermark template.
   * - The ID is returned after you call the [ListWatermark](~~ListWatermark~~) operation to query the list of image and text watermark templates.
   * 
   * This parameter is required.
   * 
   * @example
   * af2afe4761992c*****bd947dae97337
   */
  watermarkId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      watermarkConfig: 'WatermarkConfig',
      watermarkId: 'WatermarkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      watermarkConfig: 'string',
      watermarkId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

