// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DLColumn extends $dara.Model {
  /**
   * @example
   * from deserializer
   */
  comment?: string;
  /**
   * @example
   * col
   */
  name?: string;
  /**
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

