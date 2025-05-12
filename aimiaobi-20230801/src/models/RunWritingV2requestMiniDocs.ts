// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunWritingV2RequestMiniDocs extends $dara.Model {
  content?: string;
  index?: string;
  /**
   * @example
   * true
   */
  star?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      index: 'Index',
      star: 'Star',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      index: 'string',
      star: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

