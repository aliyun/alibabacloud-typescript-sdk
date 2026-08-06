// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The storage summary date.
   * 
   * @example
   * 2025-10-08
   */
  date?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

