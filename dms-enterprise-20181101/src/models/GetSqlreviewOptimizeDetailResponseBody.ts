// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResultResultsScripts extends $dara.Model {
  /**
   * @remarks
   * The content of the SQL script.
   * 
   * @example
   * alter table xxx add index idx_xx(yyy);
   */
  content?: string;
  /**
   * @remarks
   * The purpose of the SQL script. The value is set to AddIndex.
   * 
   * @example
   * AddIndex
   */
  opType?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * xxx
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      opType: 'OpType',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      opType: 'string',
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

export class GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResultResults extends $dara.Model {
  /**
   * @remarks
   * The comment that is specified when you create the SQL review rule. For more information, see [SQL review optimization](https://help.aliyun.com/document_detail/194114.html).
   * 
   * @example
   * xxx business rule: the query must have a where condition.
   */
  comments?: string;
  /**
   * @remarks
   * The optimization suggestion for the SQL statement. Valid values:
   * 
   * *   **MUST_IMPROVE**: The SQL statement must be improved.
   * *   **POTENTIAL_ISSUE**: The SQL statement contains potential issues.
   * *   **SUGGEST_IMPROVE**: We recommend that you improve the SQL statement.
   * *   **USEDMSTOOLKIT**: We recommend that you change schemas without locking tables.
   * *   **USEDMSDML_UNLOCK**: We recommend that you change data without locking tables.
   * *   **TABLEINDEXSUGGEST**: We recommend that you use SQL statements that use indexes.
   * 
   * @example
   * MUST_IMPROVE
   */
  feedback?: string;
  /**
   * @remarks
   * The review results.
   */
  messages?: string[];
  /**
   * @remarks
   * The name of the rule. For more information, see [SQL review optimization](https://help.aliyun.com/document_detail/194114.html).
   * 
   * @example
   * SELECT_SUGGEST_ASSIGN_WHERE
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the SQL review rule. Valid values:
   * 
   * *   **REVIEW**: a rule that is used to review SQL statements based on standards.
   * *   **OPTIMIZE**: a rule that is used to provide optimization suggestions.
   * 
   * @example
   * REVIEW
   */
  ruleType?: string;
  /**
   * @remarks
   * The SQL script for data changes.
   */
  scripts?: GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResultResultsScripts[];
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      feedback: 'Feedback',
      messages: 'Messages',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      scripts: 'Scripts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      feedback: 'string',
      messages: { 'type': 'array', 'itemType': 'string' },
      ruleName: 'string',
      ruleType: 'string',
      scripts: { 'type': 'array', 'itemType': GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResultResultsScripts },
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(Array.isArray(this.scripts)) {
      $dara.Model.validateArray(this.scripts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResult extends $dara.Model {
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * syntax error
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether an error occurs. Valid values:
   * 
   * *   **true**: An error occurs.
   * *   **false**: No error occurs.
   * 
   * @example
   * false
   */
  occurError?: boolean;
  /**
   * @remarks
   * The review results based on rules.
   */
  results?: GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResultResults[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      occurError: 'OccurError',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      occurError: 'boolean',
      results: { 'type': 'array', 'itemType': GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResultResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSQLReviewOptimizeDetailResponseBodyOptimizeDetail extends $dara.Model {
  /**
   * @remarks
   * The ID of the database.
   * 
   * @example
   * 111222
   */
  dbId?: number;
  /**
   * @remarks
   * The ID of the instance to which the database belongs.
   * 
   * @example
   * 123321
   */
  instanceId?: number;
  /**
   * @remarks
   * The quality of the SQL statement.
   */
  qualityResult?: GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResult;
  /**
   * @remarks
   * The key that is used to query the details of optimization suggestions.
   * 
   * @example
   * a57e54ec5433475ea3082d882fdb****
   */
  queryKey?: string;
  /**
   * @remarks
   * The type of the SQL statement. Valid values: DELETE, UPDATE, and ALTER_TABLE.
   * 
   * @example
   * UPDATE
   */
  sqlType?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      instanceId: 'InstanceId',
      qualityResult: 'QualityResult',
      queryKey: 'QueryKey',
      sqlType: 'SqlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      instanceId: 'number',
      qualityResult: GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResult,
      queryKey: 'string',
      sqlType: 'string',
    };
  }

  validate() {
    if(this.qualityResult && typeof (this.qualityResult as any).validate === 'function') {
      (this.qualityResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSQLReviewOptimizeDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The details of optimization suggestions for SQL statements.
   */
  optimizeDetail?: GetSQLReviewOptimizeDetailResponseBodyOptimizeDetail;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      optimizeDetail: 'OptimizeDetail',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      optimizeDetail: GetSQLReviewOptimizeDetailResponseBodyOptimizeDetail,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.optimizeDetail && typeof (this.optimizeDetail as any).validate === 'function') {
      (this.optimizeDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

