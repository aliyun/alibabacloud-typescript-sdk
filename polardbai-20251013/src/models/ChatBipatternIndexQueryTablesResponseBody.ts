// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatBIPatternIndexQueryTablesResponseBody extends $dara.Model {
  /**
   * @example
   * [{"tableName": "pattern_index_1"，"patternTableName": "polar4ai_nl2sql_pattern_1", "tableStatus": 0},
   * {"tableName": "pattern_index_2"，"patternTableName": "polar4ai_nl2sql_pattern_2", "tableStatus": 1},
   * {"tableName": "pattern_index_3"，"patternTableName": "polar4ai_nl2sql_pattern_3, "tableStatus": 2}]
   */
  data?: any;
  /**
   * @example
   * 错误码
   */
  errCode?: string;
  /**
   * @example
   * 错误信息
   */
  errMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 983863E2-****-1D15-A4AE-3468CD75383D
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

