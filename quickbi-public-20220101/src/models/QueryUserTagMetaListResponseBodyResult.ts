// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserTagMetaListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The description of the tag.
   * 
   * @example
   * Used to distinguish some positions
   */
  tagDescription?: string;
  /**
   * @remarks
   * The ID of the label.
   * 
   * @example
   * pop_001
   */
  tagId?: string;
  /**
   * @remarks
   * The name of the tag.
   * 
   * @example
   * Position
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

