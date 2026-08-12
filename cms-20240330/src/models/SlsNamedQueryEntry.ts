// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SlsNamedQueryEntry extends $dara.Model {
  /**
   * @remarks
   * The end offset of the time range. This parameter is mutually exclusive with window.
   */
  end?: number;
  /**
   * @remarks
   * The SPL query expression.
   */
  expr?: string;
  /**
   * @remarks
   * The start offset of the time range. This parameter is mutually exclusive with window.
   */
  start?: number;
  /**
   * @remarks
   * The time unit. Valid values: day, hour, minute, and second.
   */
  timeUnit?: string;
  /**
   * @remarks
   * The snap window size. This parameter is mutually exclusive with start and end.
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

