// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHBaseHaDBRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bds-t4n3496whj23ia4k
   */
  bdsId?: string;
  static names(): { [key: string]: string } {
    return {
      bdsId: 'BdsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bdsId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

