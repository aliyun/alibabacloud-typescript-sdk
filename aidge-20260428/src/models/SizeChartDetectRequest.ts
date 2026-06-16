// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SizeChartDetectRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the image to detect.
   * 
   * This parameter is required.
   * 
   * @example
   * https://img.alicdn.com/imgextra/i4/1822632490/O1CN01pbENR21UGT9w3a6gU_!!1822632490.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The detection threshold. Valid values: 0 to 1.
   * 
   * @example
   * 1
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

