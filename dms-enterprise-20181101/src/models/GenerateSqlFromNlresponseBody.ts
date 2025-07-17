// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateSqlFromNLResponseBodyDataKnowledgeReferences extends $dara.Model {
  /**
   * @example
   * {\\"Status\\": \\"OK\\"}
   */
  content?: string;
  /**
   * @example
   * verified
   */
  level?: string;
  /**
   * @example
   * sample_tbl
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      level: 'Level',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      level: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateSqlFromNLResponseBodyDataSimilarSql extends $dara.Model {
  question?: string;
  /**
   * @example
   * 0.52
   */
  score?: string;
  /**
   * @example
   * SELECT * WHERE ResourceType = \\"ACS::ECS::Instance\\" AND ResourceGroupId != \\"rg-xxx\\"
   */
  sql?: string;
  thought?: string;
  static names(): { [key: string]: string } {
    return {
      question: 'Question',
      score: 'Score',
      sql: 'Sql',
      thought: 'Thought',
    };
  }

  static types(): { [key: string]: any } {
    return {
      question: 'string',
      score: 'string',
      sql: 'string',
      thought: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateSqlFromNLResponseBodyDataTables extends $dara.Model {
  /**
   * @example
   * ins_1.db1.table1
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GenerateSqlFromNLResponseBody extends $dara.Model {
  data?: GenerateSqlFromNLResponseBodyData;
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
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
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GenerateSqlFromNLResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

