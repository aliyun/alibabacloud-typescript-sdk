// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterExportMemberBalanceOrdersRequest extends $dara.Model {
  /**
   * @remarks
   * The balance type filter. Valid values: permanent and monthly.
   * 
   * @example
   * permanent
   */
  balanceType?: string;
  /**
   * @remarks
   * The change direction filter. Valid values: in and out.
   * 
   * @example
   * in
   */
  direction?: string;
  static names(): { [key: string]: string } {
    return {
      balanceType: 'balanceType',
      direction: 'direction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      balanceType: 'string',
      direction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

