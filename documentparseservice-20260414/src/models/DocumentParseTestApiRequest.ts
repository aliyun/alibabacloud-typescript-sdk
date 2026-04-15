// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocumentParseTestApiRequest extends $dara.Model {
  /**
   * @example
   * https://img.alicdn.com/tfs/TB1x2xCAxz1gK0jSZSgXXavwpXa-3541-662.png
   */
  imageUrl?: string;
  /**
   * @example
   * MAIN_FLOW
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

