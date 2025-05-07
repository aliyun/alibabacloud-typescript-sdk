// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunStepByStepWritingRequestWritingConfigTags extends $dara.Model {
  /**
   * @example
   * 10
   */
  keyword?: string;
  /**
   * @example
   * gcNumberSizeTag
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

