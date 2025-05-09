// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginParamTableIncludes extends $dara.Model {
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * tm_insured_cb
   */
  tableName?: string;
  /**
   * @remarks
   * The filter condition.
   * 
   * @example
   * id<1000 or gmt_create<\\"2023-05-14 16:00:57\\"
   */
  tableWhere?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      tableWhere: 'TableWhere',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      tableWhere: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

