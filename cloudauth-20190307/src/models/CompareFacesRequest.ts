// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompareFacesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of image 1. Valid values:
   * 
   * - **FacePic**: A face photo of the user.
   * - **IDPic**: A headshot photo from the chip of the user\\"s second-generation ID card (typically read and decoded by a second-generation ID card reader device).
   * 
   * @example
   * FacePic
   */
  sourceImageType?: string;
  /**
   * @remarks
   * The URL of image 1. For more information, see the description of image URL upload.
   * 
   * @example
   * http%3A%2F%2Fjiangsu.china.com.cn%2Fuploadfile%2F2015%2F0114%2F1421221304095989.jpg
   */
  sourceImageValue?: string;
  /**
   * @remarks
   * The type of image 2. Valid values:
   * 
   * - **FacePic**: A face photo of the user.
   * - **IDPic**: A headshot photo from the chip of the user\\"s second-generation ID card (typically read and decoded by a second-generation ID card reader device).
   * 
   * @example
   * FacePic
   */
  targetImageType?: string;
  /**
   * @remarks
   * The URL of image 2. For more information, see the description of image URL upload.
   * 
   * @example
   * http%3A%2F%2Fjiangsu.china.com.cn%2Fuploadfile%2F2015%2F0114%2F1421221304095989.jpg
   */
  targetImageValue?: string;
  static names(): { [key: string]: string } {
    return {
      sourceImageType: 'SourceImageType',
      sourceImageValue: 'SourceImageValue',
      targetImageType: 'TargetImageType',
      targetImageValue: 'TargetImageValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceImageType: 'string',
      sourceImageValue: 'string',
      targetImageType: 'string',
      targetImageValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

