// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserTagMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The tag description.
   * 
   * - Format check: Maximum length is 255 characters.
   * 
   * @example
   * Job Positions within the Department
   */
  tagDescription?: string;
  /**
   * @remarks
   * The specified TagID.
   * 
   * - Format check: Maximum length is 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * e82f6c6c0333431bad0225b2f85e****
   */
  tagId?: string;
  /**
   * @remarks
   * The tag name.
   * - Format check: Maximum length is 50 characters.
   * - Only Chinese, English, numbers, and /\\|[]() symbols are allowed.
   * 
   * This parameter is required.
   * 
   * @example
   * Department
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDescription: 'TagDescription',
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDescription: 'string',
      tagId: 'string',
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

