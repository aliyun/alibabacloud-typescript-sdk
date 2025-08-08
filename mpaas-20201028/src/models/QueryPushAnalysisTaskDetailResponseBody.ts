// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPushAnalysisTaskDetailResponseBodyResultContentData extends $dara.Model {
  duration?: string;
  endTime?: number;
  pushArrivalNum?: number;
  pushNum?: number;
  pushSuccessNum?: number;
  startTime?: number;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      endTime: 'EndTime',
      pushArrivalNum: 'PushArrivalNum',
      pushNum: 'PushNum',
      pushSuccessNum: 'PushSuccessNum',
      startTime: 'StartTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      endTime: 'number',
      pushArrivalNum: 'number',
      pushNum: 'number',
      pushSuccessNum: 'number',
      startTime: 'number',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushAnalysisTaskDetailResponseBodyResultContent extends $dara.Model {
  data?: QueryPushAnalysisTaskDetailResponseBodyResultContentData;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryPushAnalysisTaskDetailResponseBodyResultContentData,
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

export class QueryPushAnalysisTaskDetailResponseBody extends $dara.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: QueryPushAnalysisTaskDetailResponseBodyResultContent;
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
      resultContent: QueryPushAnalysisTaskDetailResponseBodyResultContent,
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

