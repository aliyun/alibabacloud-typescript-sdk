// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The timestamp that indicates the end of the time range to query.
   * 
   * @example
   * 1690423741577
   */
  end?: number;
  /**
   * @remarks
   * The timestamp that indicates the beginning of the time range to query.
   * 
   * @example
   * 1687238865434
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      start: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

