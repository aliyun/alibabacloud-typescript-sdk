// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatBIPredictSseShrinkRequest extends $dara.Model {
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
   * false
   */
  generateChart?: boolean;
  /**
   * @example
   * true
   */
  generateSummary?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-2ze7smdi2f*******
   */
  instanceName?: string;
  parametersShrink?: string;
  /**
   * @example
   * 空字符串, pattern_index_1
   */
  patternIndexTableName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 查询2023年10月1日至2023年10月3日期间开课的课程名称和上课地点。
   */
  question?: string;
  /**
   * @example
   * schema_index_1
   */
  schemaIndexTableName?: string;
  /**
   * @example
   * true
   */
  selectData?: boolean;
  /**
   * @example
   * false
   */
  thinkingMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      authMessage: 'AuthMessage',
      authType: 'AuthType',
      dbName: 'DbName',
      generateChart: 'GenerateChart',
      generateSummary: 'GenerateSummary',
      instanceName: 'InstanceName',
      parametersShrink: 'Parameters',
      patternIndexTableName: 'PatternIndexTableName',
      question: 'Question',
      schemaIndexTableName: 'SchemaIndexTableName',
      selectData: 'SelectData',
      thinkingMode: 'ThinkingMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMessage: 'string',
      authType: 'string',
      dbName: 'string',
      generateChart: 'boolean',
      generateSummary: 'boolean',
      instanceName: 'string',
      parametersShrink: 'string',
      patternIndexTableName: 'string',
      question: 'string',
      schemaIndexTableName: 'string',
      selectData: 'boolean',
      thinkingMode: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

