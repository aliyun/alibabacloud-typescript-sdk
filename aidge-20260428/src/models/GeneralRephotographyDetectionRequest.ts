// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GeneralRephotographyDetectionRequest extends $dara.Model {
  /**
   * @remarks
   * The HTTPS URL of the original image to recognize. The URL must be accessible and must not contain whitespace or URL-embedded usernames or passwords.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/image.jpg
   */
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

