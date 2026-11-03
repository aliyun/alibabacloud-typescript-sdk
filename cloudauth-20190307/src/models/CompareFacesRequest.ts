// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompareFacesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the first image. Valid values:
   * 
   * - **FacePic**: A face photo of the user.
   * - **IDPic**: A portrait photo from the chip of a second-generation Chinese ID card. This photo is typically read and decoded by a second-generation ID card reader.
   * 
   * @example
   * FacePic
   */
  sourceImageType?: string;
  /**
   * @remarks
   * The URL of the first image. For more information, see the instructions on uploading image URLs.
   * 
   * @example
   * http%3A%2F%2Fjiangsu.china.com.cn%2Fuploadfile%2F2015%2F0114%2F1421221304095989.jpg
   */
  sourceImageValue?: string;
  /**
   * @remarks
   * The type of the second image. Valid values:
   * 
   * - **FacePic**: A face photo of the user.
   * - **IDPic**: A portrait photo from the chip of a second-generation Chinese ID card. This photo is typically read and decoded by a second-generation ID card reader.
   * 
   * @example
   * FacePic
   */
  targetImageType?: string;
  /**
   * @remarks
   * The URL of the second image. For more information, see the instructions on uploading image URLs.
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

