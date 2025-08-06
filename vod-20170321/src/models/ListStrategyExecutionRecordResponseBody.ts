// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStrategyExecutionRecordResponseBodyExecutionRecordList extends $dara.Model {
  completeTime?: string;
  createTime?: string;
  errorCode?: string;
  errorMessage?: string;
  executeTime?: string;
  jobParams?: string;
  mediaId?: string;
  mediaName?: string;
  status?: string;
  strategyId?: string;
  strategyName?: string;
  strategyType?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      executeTime: 'ExecuteTime',
      jobParams: 'JobParams',
      mediaId: 'MediaId',
      mediaName: 'MediaName',
      status: 'Status',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      strategyType: 'StrategyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'string',
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      executeTime: 'string',
      jobParams: 'string',
      mediaId: 'string',
      mediaName: 'string',
      status: 'string',
      strategyId: 'string',
      strategyName: 'string',
      strategyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStrategyExecutionRecordResponseBody extends $dara.Model {
  executionRecordList?: ListStrategyExecutionRecordResponseBodyExecutionRecordList[];
  maxResults?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      executionRecordList: 'ExecutionRecordList',
      maxResults: 'MaxResults',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionRecordList: { 'type': 'array', 'itemType': ListStrategyExecutionRecordResponseBodyExecutionRecordList },
      maxResults: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.executionRecordList)) {
      $dara.Model.validateArray(this.executionRecordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

