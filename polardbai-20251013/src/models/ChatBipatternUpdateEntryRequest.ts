// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatBIPatternUpdateEntryRequest extends $dara.Model {
  authMessage?: string;
  authType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * db_test
   */
  dbName?: string;
  /**
   * @example
   * 1, 2, 3, ...
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-2ze454l20me07****
   */
  instanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 【课程名称】【授课状态】的课程有哪些？
   */
  patternDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * []
   */
  patternParams?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 查询课程名称为#{courseName}授课状态为#{status}的课程
   */
  patternQuestion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SELECT course_name, course_time, course_location 
   * FROM courses 
   * WHERE 
   * course_name=#{courseName} 
   * AND status=#{statusCode}
   */
  patternSql?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * polar4ai_nl2sql_pattern, polar4ai_nl2sql_pattern_1
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      authMessage: 'AuthMessage',
      authType: 'AuthType',
      dbName: 'DbName',
      id: 'Id',
      instanceName: 'InstanceName',
      patternDescription: 'PatternDescription',
      patternParams: 'PatternParams',
      patternQuestion: 'PatternQuestion',
      patternSql: 'PatternSql',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMessage: 'string',
      authType: 'string',
      dbName: 'string',
      id: 'number',
      instanceName: 'string',
      patternDescription: 'string',
      patternParams: 'string',
      patternQuestion: 'string',
      patternSql: 'string',
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

