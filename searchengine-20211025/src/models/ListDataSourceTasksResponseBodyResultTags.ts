// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceTasksResponseBodyResultTags extends $dara.Model {
  /**
   * @remarks
   * The tag content.
   * 
   * @example
   * succeed in handling request
   */
  msg?: string;
  /**
   * @remarks
   * The tag level.
   * 
   * @example
   * ""
   */
  tagLevel?: string;
  static names(): { [key: string]: string } {
    return {
      msg: 'msg',
      tagLevel: 'tagLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      tagLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

