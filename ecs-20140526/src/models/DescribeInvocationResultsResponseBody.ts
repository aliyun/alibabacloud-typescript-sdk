// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResultTagsTag extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResultTags extends $dara.Model {
  tag?: DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResultTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResultTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResult extends $dara.Model {
  commandId?: string;
  containerId?: string;
  containerName?: string;
  dropped?: number;
  errorCode?: string;
  errorInfo?: string;
  exitCode?: number;
  finishedTime?: string;
  instanceId?: string;
  invocationStatus?: string;
  invokeId?: string;
  invokeRecordStatus?: string;
  launcher?: string;
  ossOutputDelivery?: string;
  ossOutputErrorCode?: string;
  ossOutputErrorInfo?: string;
  ossOutputStatus?: string;
  ossOutputUri?: string;
  output?: string;
  repeats?: number;
  startTime?: string;
  stopTime?: string;
  tags?: DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResultTags;
  terminationMode?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      containerId: 'ContainerId',
      containerName: 'ContainerName',
      dropped: 'Dropped',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      exitCode: 'ExitCode',
      finishedTime: 'FinishedTime',
      instanceId: 'InstanceId',
      invocationStatus: 'InvocationStatus',
      invokeId: 'InvokeId',
      invokeRecordStatus: 'InvokeRecordStatus',
      launcher: 'Launcher',
      ossOutputDelivery: 'OssOutputDelivery',
      ossOutputErrorCode: 'OssOutputErrorCode',
      ossOutputErrorInfo: 'OssOutputErrorInfo',
      ossOutputStatus: 'OssOutputStatus',
      ossOutputUri: 'OssOutputUri',
      output: 'Output',
      repeats: 'Repeats',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      tags: 'Tags',
      terminationMode: 'TerminationMode',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      containerId: 'string',
      containerName: 'string',
      dropped: 'number',
      errorCode: 'string',
      errorInfo: 'string',
      exitCode: 'number',
      finishedTime: 'string',
      instanceId: 'string',
      invocationStatus: 'string',
      invokeId: 'string',
      invokeRecordStatus: 'string',
      launcher: 'string',
      ossOutputDelivery: 'string',
      ossOutputErrorCode: 'string',
      ossOutputErrorInfo: 'string',
      ossOutputStatus: 'string',
      ossOutputUri: 'string',
      output: 'string',
      repeats: 'number',
      startTime: 'string',
      stopTime: 'string',
      tags: DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResultTags,
      terminationMode: 'string',
      username: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultsResponseBodyInvocationInvocationResults extends $dara.Model {
  invocationResult?: DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResult[];
  static names(): { [key: string]: string } {
    return {
      invocationResult: 'InvocationResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocationResult: { 'type': 'array', 'itemType': DescribeInvocationResultsResponseBodyInvocationInvocationResultsInvocationResult },
    };
  }

  validate() {
    if(Array.isArray(this.invocationResult)) {
      $dara.Model.validateArray(this.invocationResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultsResponseBodyInvocation extends $dara.Model {
  invocationResults?: DescribeInvocationResultsResponseBodyInvocationInvocationResults;
  /**
   * @remarks
   * The pagination token returned in this call.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. This value is the PageSize value specified in the paging query settings.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of commands.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      invocationResults: 'InvocationResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocationResults: DescribeInvocationResultsResponseBodyInvocationInvocationResults,
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.invocationResults && typeof (this.invocationResults as any).validate === 'function') {
      (this.invocationResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection of command execution results.
   */
  invocation?: DescribeInvocationResultsResponseBodyInvocation;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invocation: 'Invocation',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocation: DescribeInvocationResultsResponseBodyInvocation,
      requestId: 'string',
    };
  }

  validate() {
    if(this.invocation && typeof (this.invocation as any).validate === 'function') {
      (this.invocation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

