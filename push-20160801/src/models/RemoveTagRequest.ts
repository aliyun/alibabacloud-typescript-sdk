// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveTagRequest extends $dara.Model {
  /**
   * @remarks
   * The AppKey value.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * The name of the tag to remove. You can remove only one tag at a time. Maximum length: 128 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * test_tag
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
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

