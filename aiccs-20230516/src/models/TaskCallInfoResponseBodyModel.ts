// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskCallInfoResponseBodyModel extends $dara.Model {
  /**
   * @example
   * 75
   */
  finishTotal?: number;
  /**
   * @example
   * 59
   */
  total?: number;
  /**
   * @example
   * 3
   */
  unCallTotal?: number;
  static names(): { [key: string]: string } {
    return {
      finishTotal: 'FinishTotal',
      total: 'Total',
      unCallTotal: 'UnCallTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishTotal: 'number',
      total: 'number',
      unCallTotal: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

