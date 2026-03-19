// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DLColumn extends $dara.Model {
  /**
   * @remarks
   * The comment of the column.
   * 
   * @example
   * from deserializer
   */
  comment?: string;
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * col
   */
  name?: string;
  /**
   * @remarks
   * The data type of the column, including array, bigint, binary, boolean, char, date, decimal, double, float, int, interval, map, set, smallint, string, struct, timestamp, tinyint, union, varchar.
   * 
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

