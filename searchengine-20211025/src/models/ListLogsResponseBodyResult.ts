// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The result.
   */
  result?: any[];
  /**
   * @remarks
   * The total number of entries returned
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': 'any' },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

