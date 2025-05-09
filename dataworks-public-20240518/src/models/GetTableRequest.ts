// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableRequest extends $dara.Model {
  /**
   * @remarks
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
   * @example
   * true
   */
  includeBusinessMetadata?: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      includeBusinessMetadata: 'IncludeBusinessMetadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      includeBusinessMetadata: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

