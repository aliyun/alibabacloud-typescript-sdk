// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInvocationsResponseBodyInvocationsInvocationInvokeInstancesInvokeInstance extends $dara.Model {
  creationTime?: string;
  dropped?: number;
  errorCode?: string;
  errorInfo?: string;
  exitCode?: number;
  finishTime?: string;
  instanceId?: string;
  instanceInvokeStatus?: string;
  invocationStatus?: string;
  ossOutputErrorCode?: string;
  ossOutputErrorInfo?: string;
  ossOutputStatus?: string;
  ossOutputUri?: string;
  output?: string;
  repeats?: number;
  startTime?: string;
  stopTime?: string;
  timed?: boolean;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      dropped: 'Dropped',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      exitCode: 'ExitCode',
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      instanceInvokeStatus: 'InstanceInvokeStatus',
      invocationStatus: 'InvocationStatus',
      ossOutputErrorCode: 'OssOutputErrorCode',
      ossOutputErrorInfo: 'OssOutputErrorInfo',
      ossOutputStatus: 'OssOutputStatus',
      ossOutputUri: 'OssOutputUri',
      output: 'Output',
      repeats: 'Repeats',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      timed: 'Timed',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      dropped: 'number',
      errorCode: 'string',
      errorInfo: 'string',
      exitCode: 'number',
      finishTime: 'string',
      instanceId: 'string',
      instanceInvokeStatus: 'string',
      invocationStatus: 'string',
      ossOutputErrorCode: 'string',
      ossOutputErrorInfo: 'string',
      ossOutputStatus: 'string',
      ossOutputUri: 'string',
      output: 'string',
      repeats: 'number',
      startTime: 'string',
      stopTime: 'string',
      timed: 'boolean',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyInvocationsInvocationInvokeInstances extends $dara.Model {
  invokeInstance?: DescribeInvocationsResponseBodyInvocationsInvocationInvokeInstancesInvokeInstance[];
  static names(): { [key: string]: string } {
    return {
      invokeInstance: 'InvokeInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeInstance: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocationsInvocationInvokeInstancesInvokeInstance },
    };
  }

  validate() {
    if(Array.isArray(this.invokeInstance)) {
      $dara.Model.validateArray(this.invokeInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyInvocationsInvocationTagsTag extends $dara.Model {
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

export class DescribeInvocationsResponseBodyInvocationsInvocationTags extends $dara.Model {
  tag?: DescribeInvocationsResponseBodyInvocationsInvocationTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocationsInvocationTagsTag },
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

export class DescribeInvocationsResponseBodyInvocationsInvocation extends $dara.Model {
  commandContent?: string;
  commandDescription?: string;
  commandId?: string;
  commandName?: string;
  commandType?: string;
  containerId?: string;
  containerName?: string;
  creationTime?: string;
  frequency?: string;
  invocationStatus?: string;
  invokeId?: string;
  invokeInstances?: DescribeInvocationsResponseBodyInvocationsInvocationInvokeInstances;
  invokeStatus?: string;
  launcher?: string;
  ossOutputDelivery?: string;
  parameters?: string;
  repeatMode?: string;
  tags?: DescribeInvocationsResponseBodyInvocationsInvocationTags;
  terminationMode?: string;
  timed?: boolean;
  timeout?: number;
  username?: string;
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      commandDescription: 'CommandDescription',
      commandId: 'CommandId',
      commandName: 'CommandName',
      commandType: 'CommandType',
      containerId: 'ContainerId',
      containerName: 'ContainerName',
      creationTime: 'CreationTime',
      frequency: 'Frequency',
      invocationStatus: 'InvocationStatus',
      invokeId: 'InvokeId',
      invokeInstances: 'InvokeInstances',
      invokeStatus: 'InvokeStatus',
      launcher: 'Launcher',
      ossOutputDelivery: 'OssOutputDelivery',
      parameters: 'Parameters',
      repeatMode: 'RepeatMode',
      tags: 'Tags',
      terminationMode: 'TerminationMode',
      timed: 'Timed',
      timeout: 'Timeout',
      username: 'Username',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      commandDescription: 'string',
      commandId: 'string',
      commandName: 'string',
      commandType: 'string',
      containerId: 'string',
      containerName: 'string',
      creationTime: 'string',
      frequency: 'string',
      invocationStatus: 'string',
      invokeId: 'string',
      invokeInstances: DescribeInvocationsResponseBodyInvocationsInvocationInvokeInstances,
      invokeStatus: 'string',
      launcher: 'string',
      ossOutputDelivery: 'string',
      parameters: 'string',
      repeatMode: 'string',
      tags: DescribeInvocationsResponseBodyInvocationsInvocationTags,
      terminationMode: 'string',
      timed: 'boolean',
      timeout: 'number',
      username: 'string',
      workingDir: 'string',
    };
  }

  validate() {
    if(this.invokeInstances && typeof (this.invokeInstances as any).validate === 'function') {
      (this.invokeInstances as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyInvocations extends $dara.Model {
  invocation?: DescribeInvocationsResponseBodyInvocationsInvocation[];
  static names(): { [key: string]: string } {
    return {
      invocation: 'Invocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocation: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocationsInvocation },
    };
  }

  validate() {
    if(Array.isArray(this.invocation)) {
      $dara.Model.validateArray(this.invocation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBody extends $dara.Model {
  invocations?: DescribeInvocationsResponseBodyInvocations;
  /**
   * @remarks
   * Query credential value returned by this call.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * Page number of the query result.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of commands.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      invocations: 'Invocations',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocations: DescribeInvocationsResponseBodyInvocations,
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.invocations && typeof (this.invocations as any).validate === 'function') {
      (this.invocations as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

