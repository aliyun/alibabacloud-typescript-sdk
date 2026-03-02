// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CatalogOperatorRoleCreateCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  companyId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  marketId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * inner
   */
  marketType?: string;
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      marketId: 'marketId',
      marketType: 'marketType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      marketId: 'number',
      marketType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

