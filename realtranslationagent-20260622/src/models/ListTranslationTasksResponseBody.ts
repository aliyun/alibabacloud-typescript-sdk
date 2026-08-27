// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTranslationTasksResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The task completion time, in 13-digit timestamp format.
   * 
   * @example
   * 1782459562000
   */
  completeTime?: string;
  /**
   * @remarks
   * The credits consumed by this task.
   * 
   * @example
   * 81.2992
   */
  costCredits?: number;
  /**
   * @remarks
   * The time consumed, in milliseconds.
   * 
   * @example
   * 196
   */
  costTime?: number;
  /**
   * @remarks
   * The creator ID.
   * 
   * @example
   * acc_93****c936
   */
  creator?: string;
  /**
   * @remarks
   * The creator name.
   * 
   * @example
   * tes_account@test.com
   */
  creatorName?: string;
  /**
   * @remarks
   * The error message when the task fails.
   * 
   * @example
   * device offline
   */
  errorMessage?: string;
  /**
   * @remarks
   * The parsed file format.
   * 
   * @example
   * PPTX
   */
  fileFormat?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * translated_a_file.pptx
   */
  fileName?: string;
  /**
   * @remarks
   * The task creation time, in 13-digit timestamp format.
   * 
   * @example
   * 1782459562000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * org_c6******cdc2ce7
   */
  orgId?: string;
  /**
   * @remarks
   * The source file address.
   * 
   * @example
   * translated_a_file.pptx
   */
  originalFileName?: string;
  /**
   * @remarks
   * The page count of the uploaded file.
   * 
   * @example
   * 21
   */
  pageCount?: number;
  /**
   * @remarks
   * The task progress.
   * 
   * @example
   * 61
   */
  progress?: number;
  /**
   * @remarks
   * The language of the source file.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The task start time, in 13-digit timestamp format.
   * 
   * @example
   * 1782459562000
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - CANCELLED: Cancelled.
   * - COMPLETED: Completed.
   * - FAILED: Failed.
   * - PROCESSING: Processing.
   * - PENDING: Pending.
   * - ANALYZED: Analyzed.
   * 
   * @example
   * CANCELLED
   */
  status?: string;
  /**
   * @remarks
   * The target language.
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  /**
   * @remarks
   * The translation task ID.
   * 
   * @example
   * f9c35b0453b
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * - DOCUMENT: document type.
   * 
   * @example
   * DOCUMENT
   */
  taskType?: string;
  /**
   * @remarks
   * The translation template. Valid values:
   * - common: General.
   * 
   * @example
   * common
   */
  template?: string;
  /**
   * @remarks
   * The word count of the uploaded file.
   * 
   * @example
   * 1600
   */
  wordCount?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 6458351*****0cc5
   */
  workSpaceId?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      costCredits: 'CostCredits',
      costTime: 'CostTime',
      creator: 'Creator',
      creatorName: 'CreatorName',
      errorMessage: 'ErrorMessage',
      fileFormat: 'FileFormat',
      fileName: 'FileName',
      gmtCreate: 'GmtCreate',
      orgId: 'OrgId',
      originalFileName: 'OriginalFileName',
      pageCount: 'PageCount',
      progress: 'Progress',
      sourceLanguage: 'SourceLanguage',
      startTime: 'StartTime',
      status: 'Status',
      targetLanguage: 'TargetLanguage',
      taskId: 'TaskId',
      taskType: 'TaskType',
      template: 'Template',
      wordCount: 'WordCount',
      workSpaceId: 'WorkSpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'string',
      costCredits: 'number',
      costTime: 'number',
      creator: 'string',
      creatorName: 'string',
      errorMessage: 'string',
      fileFormat: 'string',
      fileName: 'string',
      gmtCreate: 'string',
      orgId: 'string',
      originalFileName: 'string',
      pageCount: 'number',
      progress: 'number',
      sourceLanguage: 'string',
      startTime: 'string',
      status: 'string',
      targetLanguage: 'string',
      taskId: 'string',
      taskType: 'string',
      template: 'string',
      wordCount: 'number',
      workSpaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranslationTasksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data list.
   */
  list?: ListTranslationTasksResponseBodyDataList[];
  /**
   * @remarks
   * The maximum number of results returned per request when using the NextToken-based pagination.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Indicates whether a token exists for the next query. Valid values:
   * - If **NextToken** is empty, no next query exists.
   * - If **NextToken** has a value, the value is the token for the next query.
   * 
   * @example
   * AAAAAVpfrV4aVmra0dxbtRB74lmSGzegoejeIqxIET/WdX50
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListTranslationTasksResponseBodyDataList },
      maxResults: 'number',
      nextToken: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranslationTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: ListTranslationTasksResponseBodyData;
  /**
   * @remarks
   * The return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 50ABF118-2F9D-51DF-B1FB-1E389817DC47
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListTranslationTasksResponseBodyData,
      message: 'string',
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

