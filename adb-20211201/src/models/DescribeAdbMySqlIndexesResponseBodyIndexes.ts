// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdbMySqlIndexesResponseBodyIndexes extends $dara.Model {
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * preclcu
   */
  column?: string;
  /**
   * @remarks
   * The name of the index.
   * 
   * @example
   * ttl
   */
  name?: string;
  /**
   * @remarks
   * The index type.
   * 
   * @example
   * normal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
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

