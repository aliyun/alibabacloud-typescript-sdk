// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppDatabaseTableSchemasRequest extends $dara.Model {
  /**
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @example
   * default.ai_advertising_material_rec_train_v1103
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
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

