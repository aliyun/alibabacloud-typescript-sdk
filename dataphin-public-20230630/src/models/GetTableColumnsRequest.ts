// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableColumnsRequest extends $dara.Model {
  /**
   * @remarks
   * The catalog of the asset table, which is the name of the business unit or project space.
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
   * @remarks
   * The ID of the operating user.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The GUID of the table. If this parameter is specified, it is used for priority query, and the Catalog and TableName parameters are not required and will be ignored even if specified.
   * 
   * @example
   * dp_ds_table_xxx
   */
  tableGuid?: string;
  /**
   * @remarks
   * The table name.
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
      tableGuid: 'TableGuid',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      opTenantId: 'number',
      opUserId: 'string',
      tableGuid: 'string',
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

