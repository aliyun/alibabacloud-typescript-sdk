// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLTuningAdvicesResponseBodyDataColumns extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  columnName?: string;
  /**
   * @example
   * 100
   */
  maxValue?: string;
  /**
   * @example
   * 1
   */
  minValue?: string;
  /**
   * @remarks
   * NDV
   * 
   * @example
   * 100
   */
  ndv?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      maxValue: 'MaxValue',
      minValue: 'MinValue',
      ndv: 'Ndv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      maxValue: 'string',
      minValue: 'string',
      ndv: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

