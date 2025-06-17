// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEsExceptionDataResponseBodyContents extends $dara.Model {
  /**
   * @remarks
   * Information about the time column and the error column name.
   */
  columns?: string[];
  /**
   * @remarks
   * The name of the table that shows the errors of the script.
   * 
   * @example
   * 401
   */
  name?: string;
  /**
   * @remarks
   * The time columns and error column names.
   */
  points?: string[];
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      name: 'Name',
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      points: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.points)) {
      $dara.Model.validateArray(this.points);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

