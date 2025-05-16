// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClustersResponseBodyClustersUsers extends $dara.Model {
  /**
   * @remarks
   * The number of ordinary users.
   * 
   * @example
   * 2
   */
  normalCounts?: number;
  /**
   * @remarks
   * The number of administrators.
   * 
   * @example
   * 2
   */
  sudoCounts?: number;
  static names(): { [key: string]: string } {
    return {
      normalCounts: 'NormalCounts',
      sudoCounts: 'SudoCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      normalCounts: 'number',
      sudoCounts: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

