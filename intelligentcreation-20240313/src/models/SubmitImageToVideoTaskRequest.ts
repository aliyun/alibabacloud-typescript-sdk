// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitImageToVideoTaskRequest extends $dara.Model {
  /**
   * @example
   * http://xxx/image.png
   */
  imageUrl?: string;
  posPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'imageUrl',
      posPrompt: 'posPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      posPrompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

