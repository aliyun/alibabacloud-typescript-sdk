// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GenerateSqlFromNLResponseBodyDataKnowledgeReferences } from "./GenerateSqlFromNlresponseBodyDataKnowledgeReferences";
import { GenerateSqlFromNLResponseBodyDataSimilarSql } from "./GenerateSqlFromNlresponseBodyDataSimilarSql";
import { GenerateSqlFromNLResponseBodyDataTables } from "./GenerateSqlFromNlresponseBodyDataTables";


export class GenerateSqlFromNLResponseBodyData extends $dara.Model {
  knowledgeReferences?: GenerateSqlFromNLResponseBodyDataKnowledgeReferences[];
  question?: string;
  similarSql?: GenerateSqlFromNLResponseBodyDataSimilarSql[];
  /**
   * @example
   * SELECT * FROM table WHERE condition;
   */
  sql?: string;
  tables?: GenerateSqlFromNLResponseBodyDataTables[];
  /**
   * @example
   * 通过分析用户的问题和提供的知识，生成了相应的SQL语句。
   */
  thought?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeReferences: 'KnowledgeReferences',
      question: 'Question',
      similarSql: 'SimilarSql',
      sql: 'Sql',
      tables: 'Tables',
      thought: 'Thought',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeReferences: { 'type': 'array', 'itemType': GenerateSqlFromNLResponseBodyDataKnowledgeReferences },
      question: 'string',
      similarSql: { 'type': 'array', 'itemType': GenerateSqlFromNLResponseBodyDataSimilarSql },
      sql: 'string',
      tables: { 'type': 'array', 'itemType': GenerateSqlFromNLResponseBodyDataTables },
      thought: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.knowledgeReferences)) {
      $dara.Model.validateArray(this.knowledgeReferences);
    }
    if(Array.isArray(this.similarSql)) {
      $dara.Model.validateArray(this.similarSql);
    }
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

