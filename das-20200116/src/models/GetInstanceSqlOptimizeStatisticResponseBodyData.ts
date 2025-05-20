// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceSqlOptimizeStatisticResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of automatic SQL optimization events.
   * 
   * @example
   * 16
   */
  count?: number;
  /**
   * @remarks
   * The multiple of the maximum improvement for returned automatic SQL optimization events.
   * 
   * @example
   * 1003
   */
  improvement?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      improvement: 'improvement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      improvement: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

