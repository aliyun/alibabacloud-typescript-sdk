// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogstashResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * The number of data nodes.
   * 
   * @example
   * 10
   */
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

