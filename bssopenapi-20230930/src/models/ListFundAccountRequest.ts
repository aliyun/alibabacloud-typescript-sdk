// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFundAccountRequest extends $dara.Model {
  /**
   * @remarks
   * Level-1 marketplace ID. If this parameter is left empty, the ID of the marketplace to which the current user belongs is used by default.
   * 
   * @example
   * 2084210001
   */
  nbid?: string;
  /**
   * @remarks
   * Specifies whether to query only the active account list. Default value: false.
   */
  queryOnlyInUse?: boolean;
  /**
   * @remarks
   * Specifies whether to query only the managed account list. Default value: false.
   */
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

