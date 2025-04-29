// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateOutputFormatRequestTags extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  tagDefinePrompt?: string;
  /**
   * @example
   * xxxx
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDefinePrompt: 'tagDefinePrompt',
      tagName: 'tagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDefinePrompt: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

