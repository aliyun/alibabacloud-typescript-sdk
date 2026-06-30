// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTranslationTasksResponseBodyDataList extends $dara.Model {
  completeTime?: string;
  costCredits?: number;
  costTime?: number;
  creator?: string;
  creatorName?: string;
  errorMessage?: string;
  fileFormat?: string;
  fileName?: string;
  gmtCreate?: string;
  orgId?: string;
  originalFileName?: string;
  pageCount?: number;
  progress?: number;
  sourceLanguage?: string;
  startTime?: string;
  status?: string;
  targetLanguage?: string;
  taskId?: string;
  taskType?: string;
  template?: string;
  wordCount?: number;
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
  list?: ListTranslationTasksResponseBodyDataList[];
  maxResults?: number;
  nextToken?: string;
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
  code?: string;
  data?: ListTranslationTasksResponseBodyData;
  message?: string;
  requestId?: string;
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

