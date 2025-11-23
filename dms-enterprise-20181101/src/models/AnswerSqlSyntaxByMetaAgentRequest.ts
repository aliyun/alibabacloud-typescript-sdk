// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnswerSqlSyntaxByMetaAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the database. You can call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1***
   */
  dbId?: string;
  /**
   * @remarks
   * The name of the selected model. You can use only Qwen series models.
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * The syntax question.
   * 
   * @example
   * 怎么获取当前时间的字符串
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      model: 'Model',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'string',
      model: 'string',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

