// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DateSummary extends $dara.Model {
  /**
   * @remarks
   * The date.
   * 
   * @example
   * 2025-06-01
   */
  date?: string;
  /**
   * @remarks
   * The value.
   * 
   * @example
   * 100
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

