// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetElecTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20240115-3
   */
  code?: string;
  /**
   * @remarks
   * List of years.
   * 
   * This parameter is required.
   */
  yearList?: number[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      yearList: 'yearList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      yearList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.yearList)) {
      $dara.Model.validateArray(this.yearList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

