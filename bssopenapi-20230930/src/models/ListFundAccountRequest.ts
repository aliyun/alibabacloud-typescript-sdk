// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFundAccountRequest extends $dara.Model {
  /**
   * @example
   * 2084210001
   */
  nbid?: string;
  queryOnlyInUse?: boolean;
  queryOnlyManage?: boolean;
  static names(): { [key: string]: string } {
    return {
      nbid: 'Nbid',
      queryOnlyInUse: 'QueryOnlyInUse',
      queryOnlyManage: 'QueryOnlyManage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nbid: 'string',
      queryOnlyInUse: 'boolean',
      queryOnlyManage: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

