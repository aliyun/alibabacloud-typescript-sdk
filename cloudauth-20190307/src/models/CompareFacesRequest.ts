// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompareFacesRequest extends $dara.Model {
  /**
   * @remarks
   * Type of Image 1, with values:
   * 
   * - **FacePic**: User\\"s face photo
   * - **IDPic**: Headshot from the user\\"s second-generation ID card chip (typically obtained and decoded by a second-generation ID card reader)
   * 
   * @example
   * FacePic
   */
  sourceImageType?: string;
  /**
   * @remarks
   * Address of Image 1. Please refer to the instructions on uploading image addresses.
   * 
   * @example
   * http%3A%2F%2Fjiangsu.china.com.cn%2Fuploadfile%2F2015%2F0114%2F1421221304095989.jpg
   */
  sourceImageValue?: string;
  /**
   * @remarks
   * Type of Image 2, with values:
   * 
   * - **FacePic**: User\\"s face photo
   * - **IDPic**: Headshot from the user\\"s second-generation ID card chip (typically obtained and decoded by a second-generation ID card reader)
   * 
   * @example
   * FacePic
   */
  targetImageType?: string;
  /**
   * @remarks
   * Address of Image 2. Please refer to the instructions on uploading image addresses.
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

