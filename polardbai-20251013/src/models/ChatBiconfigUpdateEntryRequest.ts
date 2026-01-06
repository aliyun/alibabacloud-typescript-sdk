// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatBIConfigUpdateEntryRequest extends $dara.Model {
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 若formula_function为总销售额：SUM(销售额)，则在最终处理时，问题中的总销售额将采用SUM(销售额)公式作为附加信息一并进行处理。
   */
  formulaFunction?: string;
  /**
   * @example
   * 1
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
   * @example
   * 1
   */
  isFunctional?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 若query_function为{"append":["一","二"],"delete":["？"],"replace":{"张三":"a","李四":"b"}}，则表示：当text_condition匹配时，在问题的结尾添加一和二，并删除问题中的？。最后，将问题中的张三替换为a，将李四替换为b。
   * 
   * 例如：
   * 问题张三今年总销售额是多少？：在text_condition匹配时，会最终被处理为a今年总销售额是多少一二。
   * 问题李四今年总销售额多少？：在text_condition匹配时，会最终被处理为b今年总销售额是多少一二。
   */
  queryFunction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 若sql_condition=students||student_courses&&!!courses，则表示：如果表students或表student_courses在SQL中，且表courses不在SQL中，则条件匹配。
   * 
   * 例如：
   * SQL语句SELECT * FROM student_courses：条件匹配。
   * SQL语句SELECT c.course_name FROM student_courses sc JOIN courses c ON sc.courses_id = c.id;：条件不匹配。
   */
  sqlCondition?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 若sql_function={"replace":{"status = \"请假\"":"status = 0","status = \"出勤\"":"status = 1"}}，则表示：在sql_condition匹配的情况下，将SQL中的status = \"请假\"替换为status = 0，status = \"出勤\"替换为status = 1。
   */
  sqlFunction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 若text_condition为张三||李四&&!!王五，则表示当问题包含张三，或者包含李四且不包含王五时，条件匹配。
   * 
   * 例如：
   * 张三今年总销售额多少？：条件匹配。
   * 李四今年总销售额多少？：条件匹配。
   * 李四王五今年总销售额多少？：条件不匹配。
   */
  textCondition?: string;
  static names(): { [key: string]: string } {
    return {
      authMessage: 'AuthMessage',
      authType: 'AuthType',
      dbName: 'DbName',
      formulaFunction: 'FormulaFunction',
      id: 'Id',
      instanceName: 'InstanceName',
      isFunctional: 'IsFunctional',
      queryFunction: 'QueryFunction',
      sqlCondition: 'SqlCondition',
      sqlFunction: 'SqlFunction',
      textCondition: 'TextCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMessage: 'string',
      authType: 'string',
      dbName: 'string',
      formulaFunction: 'string',
      id: 'number',
      instanceName: 'string',
      isFunctional: 'number',
      queryFunction: 'string',
      sqlCondition: 'string',
      sqlFunction: 'string',
      textCondition: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

