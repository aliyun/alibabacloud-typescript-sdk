// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatBISchemaIndexQueryTablesResponseBody extends $dara.Model {
  /**
   * @example
   * [{"tableName": "schema_index_1"，"tablesIncluded": "", "columnsExcluded": "", "toSample": 0, "tableStatus": 0},
   * {"tableName": "schema_index_2"，"tablesIncluded": "", "columnsExcluded": "", "toSample": 0, "tableStatus": 1},
   * {"tableName": "schema_index_3"，"tablesIncluded": "", "columnsExcluded": "", "toSample": 0, "tableStatus": 2}]
   */
  data?: any;
  /**
   * @example
   * null
   */
  errCode?: string;
  /**
   * @example
   * null
   */
  errMessage?: string;
  /**
   * @example
   * FC388CBF-F12C-57E8-832F-61A18131B106
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

