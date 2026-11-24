// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEduHomeworkCorrectSubmitRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to correct the image distortion.
   * 
   * @example
   * true
   */
  dewarp?: boolean;
  /**
   * @remarks
   * The Base64-encoded image.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASABIAAD/4QCMRXhpZgAATU0AK...
   */
  imageBase64?: string;
  /**
   * @remarks
   * The URL of the image.
   * 
   * @example
   * https://xxx/xxx.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019F593F-D6EE-5F44-819A-6CDA127D1637
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dewarp: 'dewarp',
      imageBase64: 'imageBase64',
      imageUrl: 'imageUrl',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dewarp: 'boolean',
      imageBase64: 'string',
      imageUrl: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

