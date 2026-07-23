// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAgentAccuracyTestResultsResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The ID of the accuracy test task.
   * 
   * @example
   * 692abb8f-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  accuracyTestTaskId?: string;
  /**
   * @remarks
   * The actual answer from the agent.
   * 
   * @example
   * 在公司历史职位记录中，共有97,750名员工曾拥有Senior Engineer头衔。
   */
  agentResult?: string;
  agentSql?: string;
  /**
   * @remarks
   * The expected answer.
   * 
   * @example
   * 97750
   */
  answerResult?: string;
  /**
   * @remarks
   * The expected SQL.
   * 
   * @example
   * SELECT COUNT(*) FROM titles WHERE title = \\"Senior Engineer\\";
   */
  answerSql?: string;
  /**
   * @remarks
   * The AI evaluation result.
   * 
   * @example
   * true
   */
  isTrue?: boolean;
  /**
   * @remarks
   * The test question.
   * 
   * @example
   * 拥有Senior Engineer头衔的员工有多少人？
   */
  question?: string;
  /**
   * @remarks
   * The error reason.
   * 
   * @example
   * SQL 中不应该使用COUNT(DISTINCT)
   */
  reason?: string;
  /**
   * @remarks
   * The improvement suggestion.
   * 
   * @example
   * 在问题中描述清楚是否需去重
   */
  recommendation?: string;
  /**
   * @remarks
   * The result ID.
   * 
   * @example
   * at-emhnbwewfngrxxxxxxxxxx
   */
  resultId?: string;
  sessionId?: string;
  /**
   * @remarks
   * The subtask ID.
   * 
   * @example
   * f1eb8728-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  subtaskId?: string;
  static names(): { [key: string]: string } {
    return {
      accuracyTestTaskId: 'AccuracyTestTaskId',
      agentResult: 'AgentResult',
      agentSql: 'AgentSql',
      answerResult: 'AnswerResult',
      answerSql: 'AnswerSql',
      isTrue: 'IsTrue',
      question: 'Question',
      reason: 'Reason',
      recommendation: 'Recommendation',
      resultId: 'ResultId',
      sessionId: 'SessionId',
      subtaskId: 'SubtaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accuracyTestTaskId: 'string',
      agentResult: 'string',
      agentSql: 'string',
      answerResult: 'string',
      answerSql: 'string',
      isTrue: 'boolean',
      question: 'string',
      reason: 'string',
      recommendation: 'string',
      resultId: 'string',
      sessionId: 'string',
      subtaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataAgentAccuracyTestResultsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The accuracy rate.
   * 
   * @example
   * 90
   */
  accuracyRate?: number;
  /**
   * @remarks
   * The ID of the accuracy test task.
   * 
   * @example
   * 692abb8f-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   */
  accuracyTestTaskId?: string;
  /**
   * @remarks
   * The data content.
   */
  content?: ListDataAgentAccuracyTestResultsResponseBodyDataContent[];
  /**
   * @remarks
   * The number of test cases that passed evaluation.
   * 
   * @example
   * 9
   */
  correctCount?: number;
  failedCount?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  pendingCount?: string;
  /**
   * @remarks
   * The total number of results.
   * 
   * @example
   * 10
   */
  totalElements?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      accuracyRate: 'AccuracyRate',
      accuracyTestTaskId: 'AccuracyTestTaskId',
      content: 'Content',
      correctCount: 'CorrectCount',
      failedCount: 'FailedCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pendingCount: 'PendingCount',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accuracyRate: 'number',
      accuracyTestTaskId: 'string',
      content: { 'type': 'array', 'itemType': ListDataAgentAccuracyTestResultsResponseBodyDataContent },
      correctCount: 'number',
      failedCount: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pendingCount: 'string',
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataAgentAccuracyTestResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response struct.
   */
  data?: ListDataAgentAccuracyTestResultsResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * no use
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * no use
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDataAgentAccuracyTestResultsResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

