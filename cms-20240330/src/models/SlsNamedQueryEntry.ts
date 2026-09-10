// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SlsNamedQueryEntry extends $dara.Model {
  /**
   * @remarks
   * The end offset of the time range. This parameter is mutually exclusive with window.
   * 
   * @example
   * 1700000300000
   */
  end?: number;
  /**
   * @remarks
   * The SPL query expression.
   * 
   * @example
   * logLevel: error
   */
  expr?: string;
  /**
   * @remarks
   * The start offset of the time range. This parameter is mutually exclusive with window.
   * 
   * @example
   * 1700000000000
   */
  start?: number;
  /**
   * @remarks
   * The time unit. Valid values: day, hour, minute, and second.
   * 
   * @example
   * second
   */
  timeUnit?: string;
  /**
   * @remarks
   * The snap window size. This parameter is mutually exclusive with start and end.
   * 
   * @example
   * 300
   */
  window?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      expr: 'expr',
      start: 'start',
      timeUnit: 'timeUnit',
      window: 'window',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      expr: 'string',
      start: 'number',
      timeUnit: 'string',
      window: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

