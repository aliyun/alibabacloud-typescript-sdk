// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWatermarkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the watermark template to which you want to change.
   * 
   * *   Only letters and digits are supported.
   * *   The name cannot exceed 128 bytes.
   * *   The value must be encoded in UTF-8.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The configuration information of the watermark such as the display position and special effects. The value must be a JSON string. The configuration parameters for image and text watermarks are different. For more information about the parameter structure, see [WatermarkConfig](~~98618#section-h01-44s-2lr~~).
   * 
   * This parameter is required.
   * 
   * @example
   * {"Width":"55","Height":"55","Dx":"9","Dy":"9","ReferPos":"BottonLeft","Type":"Image"}
   */
  watermarkConfig?: string;
  /**
   * @remarks
   * The ID of the watermark template. You can specify only one watermark template ID. You can obtain the ID by using one of the following methods:
   * 
   * *   Obtain the watermark template ID from the response to the [AddWatermark](~~AddWatermark~~) operation that you call to create a watermark template.
   * *   Obtain the watermark template ID from the response to the [ListWatermark](~~ListWatermark~~) operation that you call to query all watermark templates within your account.
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

