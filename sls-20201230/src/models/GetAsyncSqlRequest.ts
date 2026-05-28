// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAsyncSqlRequest extends $dara.Model {
  /**
   * @example
   * 100
   */
  line?: number;
  /**
   * @example
   * 0
   */
  offset?: number;
  static names(): { [key: string]: string } {
    return {
      line: 'line',
      offset: 'offset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: 'number',
      offset: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

