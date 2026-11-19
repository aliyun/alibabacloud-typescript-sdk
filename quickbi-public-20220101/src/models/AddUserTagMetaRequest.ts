// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserTagMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The tag description. Format requirements: The maximum length is 255 characters.
   * 
   * @example
   * Positions within the department
   */
  tagDescription?: string;
  /**
   * @remarks
   * The tag name. Format requirements:
   * - The maximum length is 50 characters.
   * - Only Chinese characters, English letters, digits, and the /\\|[]() symbols are allowed.
   * 
   * This parameter is required.
   * 
   * @example
   * Position
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

