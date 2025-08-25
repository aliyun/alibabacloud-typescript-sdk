// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPushAnalysisTaskListResponseBodyResultContentDataList extends $dara.Model {
  gmtCreate?: number;
  taskId?: string;
  taskName?: string;
  templateId?: string;
  templateName?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      taskId: 'TaskId',
      taskName: 'TaskName',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      taskId: 'string',
      taskName: 'string',
      templateId: 'string',
      templateName: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushAnalysisTaskListResponseBodyResultContentData extends $dara.Model {
  gmtCreate?: number;
  list?: QueryPushAnalysisTaskListResponseBodyResultContentDataList[];
  taskId?: string;
  taskName?: string;
  templateId?: string;
  templateName?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      list: 'List',
      taskId: 'TaskId',
      taskName: 'TaskName',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      list: { 'type': 'array', 'itemType': QueryPushAnalysisTaskListResponseBodyResultContentDataList },
      taskId: 'string',
      taskName: 'string',
      templateId: 'string',
      templateName: 'string',
      type: 'number',
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

export class QueryPushAnalysisTaskListResponseBodyResultContent extends $dara.Model {
  data?: QueryPushAnalysisTaskListResponseBodyResultContentData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryPushAnalysisTaskListResponseBodyResultContentData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushAnalysisTaskListResponseBody extends $dara.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: QueryPushAnalysisTaskListResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: QueryPushAnalysisTaskListResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.resultContent && typeof (this.resultContent as any).validate === 'function') {
      (this.resultContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

