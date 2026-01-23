// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableColumnsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * LD_test01_dev
   */
  catalog?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
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
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      opTenantId: 'number',
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

