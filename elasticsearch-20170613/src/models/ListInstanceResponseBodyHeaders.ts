// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include dedicated master nodes (obsolete). Valid values:
   * 
   * *   true: The files contain data that is dumped to the IA storage medium.
   * *   false: The files do not contain data that is dumped to the IA storage medium.
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

