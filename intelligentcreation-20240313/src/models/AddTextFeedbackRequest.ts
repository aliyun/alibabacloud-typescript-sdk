// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTextFeedbackRequest extends $dara.Model {
  content?: string;
  /**
   * @example
   * 1
   */
  quality?: number;
  /**
   * @example
   * 8478
   */
  textId?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      quality: 'quality',
      textId: 'textId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      quality: 'number',
      textId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

