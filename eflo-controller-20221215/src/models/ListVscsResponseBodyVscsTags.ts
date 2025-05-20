// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVscsResponseBodyVscsTags extends $dara.Model {
  /**
   * @remarks
   * Tag key
   * 
   * @example
   * key001
   */
  tagKey?: string;
  /**
   * @remarks
   * Tag value
   * 
   * @example
   * value001
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
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

