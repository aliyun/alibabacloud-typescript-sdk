// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveTagRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
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

