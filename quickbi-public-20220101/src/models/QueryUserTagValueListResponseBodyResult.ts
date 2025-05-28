// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserTagValueListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Tag ID.
   * 
   * @example
   * pop_001
   */
  tagId?: string;
  /**
   * @remarks
   * Tag name.
   * 
   * @example
   * Position
   */
  tagName?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * Supervisor
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagId: 'TagId',
      tagName: 'TagName',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagId: 'string',
      tagName: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

