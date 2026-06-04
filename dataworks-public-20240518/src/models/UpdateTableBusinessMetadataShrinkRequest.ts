// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTableBusinessMetadataShrinkRequest extends $dara.Model {
  /**
   * @example
   * {"biz_owner":["张三"]}
   */
  customAttributesShrink?: string;
  /**
   * @remarks
   * The table ID. You can refer to the format of the table ID returned by the ListTables operation.
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-table:123456XXX::test_project::test_tbl
   * dlf-table:123456XXX:test_catalog:test_db::test_tbl
   * hms-table:c-abc123xxx::test_db::test_tbl
   * holo-table:h-abc123xxx::test_db:test_schema:test_tbl
   */
  id?: string;
  /**
   * @remarks
   * The usage notes. The rich text format is supported.
   * 
   * @example
   * ## introduction
   */
  readme?: string;
  static names(): { [key: string]: string } {
    return {
      customAttributesShrink: 'CustomAttributes',
      id: 'Id',
      readme: 'Readme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAttributesShrink: 'string',
      id: 'string',
      readme: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

