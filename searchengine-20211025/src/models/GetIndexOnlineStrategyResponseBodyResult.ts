// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIndexOnlineStrategyResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The index change rate.
   * 
   * @example
   * 20
   */
  changeRate?: number;
  static names(): { [key: string]: string } {
    return {
      changeRate: 'changeRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

