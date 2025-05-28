// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserTagMetaRequest extends $dara.Model {
  /**
   * @remarks
   * Tag description. Format check: maximum length of 255 characters.
   * 
   * @example
   * test
   */
  tagDescription?: string;
  /**
   * @remarks
   * Tag name. Format check:
   * - Maximum length of 50 characters.
   * - Only Chinese, English, numbers, and /\\|[]() symbols are allowed.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDescription: 'TagDescription',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDescription: 'string',
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

