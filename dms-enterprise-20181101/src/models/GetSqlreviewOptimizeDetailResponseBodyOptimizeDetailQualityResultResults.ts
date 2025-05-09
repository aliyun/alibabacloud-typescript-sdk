// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSQLReviewOptimizeDetailResponseBodyOptimizeDetailQualityResultResultsScripts } from "./GetSqlreviewOptimizeDetailResponseBodyOptimizeDetailQualityResultResultsScripts";


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

