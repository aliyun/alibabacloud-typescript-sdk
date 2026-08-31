// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableColumnsRequest extends $dara.Model {
  /**
   * @remarks
   * The asset table catalog, which is the name of the business unit or workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * LD_test01_dev
   */
  catalog?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The table name.
   * 
   * This parameter is required.
   * 
   * @example
   * t_test01
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      opTenantId: 'number',
      opUserId: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

