// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIndexResponseBodyResultDataSourceInfoSaroConfig extends $dara.Model {
  /**
   * @remarks
   * The namespace of the SARO data source.
   * 
   * @example
   * TEST_dump_demo_sj_na61hunbu2_share_holo
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the SARO table.
   * 
   * @example
   * llm
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      tableName: 'tableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
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

