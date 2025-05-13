// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceHistoryEventsResponseBodyHeaders extends $dara.Model {
  /**
   * @example
   * 15
   */
  xTotalCount?: number;
  /**
   * @example
   * 2
   */
  xTotalFailed?: number;
  /**
   * @example
   * 13
   */
  xTotalSuccess?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
      xTotalFailed: 'X-Total-Failed',
      xTotalSuccess: 'X-Total-Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
      xTotalFailed: 'number',
      xTotalSuccess: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

