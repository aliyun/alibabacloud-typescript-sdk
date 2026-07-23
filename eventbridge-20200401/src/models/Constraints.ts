// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Constraints extends $dara.Model {
  /**
   * @remarks
   * Start of the query time window (Unix milliseconds)
   * 
   * @example
   * 1717200000000
   */
  beginTime?: number;
  /**
   * @remarks
   * End of the query time window (Unix milliseconds)
   * 
   * @example
   * 1717200000000
   */
  endTime?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

