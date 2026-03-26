// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeInstancesInvokeInstance extends $dara.Model {
  creationTime?: string;
  errorCode?: string;
  errorInfo?: string;
  finishTime?: string;
  instanceId?: string;
  invocationStatus?: string;
  startTime?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      invocationStatus: 'InvocationStatus',
      startTime: 'StartTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      errorCode: 'string',
      errorInfo: 'string',
      finishTime: 'string',
      instanceId: 'string',
      invocationStatus: 'string',
      startTime: 'string',
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

export class DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeInstances extends $dara.Model {
  invokeInstance?: DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeInstancesInvokeInstance[];
  static names(): { [key: string]: string } {
    return {
      invokeInstance: 'InvokeInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeInstance: { 'type': 'array', 'itemType': DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeInstancesInvokeInstance },
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

export class DescribeSendFileResultsResponseBodyInvocationsInvocationTagsTag extends $dara.Model {
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

export class DescribeSendFileResultsResponseBodyInvocationsInvocationTags extends $dara.Model {
  tag?: DescribeSendFileResultsResponseBodyInvocationsInvocationTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeSendFileResultsResponseBodyInvocationsInvocationTagsTag },
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

export class DescribeSendFileResultsResponseBodyInvocationsInvocation extends $dara.Model {
  content?: string;
  contentType?: string;
  creationTime?: string;
  description?: string;
  fileGroup?: string;
  fileMode?: string;
  fileOwner?: string;
  invocationStatus?: string;
  invokeId?: string;
  invokeInstances?: DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeInstances;
  name?: string;
  overwrite?: string;
  tags?: DescribeSendFileResultsResponseBodyInvocationsInvocationTags;
  targetDir?: string;
  vmCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      creationTime: 'CreationTime',
      description: 'Description',
      fileGroup: 'FileGroup',
      fileMode: 'FileMode',
      fileOwner: 'FileOwner',
      invocationStatus: 'InvocationStatus',
      invokeId: 'InvokeId',
      invokeInstances: 'InvokeInstances',
      name: 'Name',
      overwrite: 'Overwrite',
      tags: 'Tags',
      targetDir: 'TargetDir',
      vmCount: 'VmCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      creationTime: 'string',
      description: 'string',
      fileGroup: 'string',
      fileMode: 'string',
      fileOwner: 'string',
      invocationStatus: 'string',
      invokeId: 'string',
      invokeInstances: DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeInstances,
      name: 'string',
      overwrite: 'string',
      tags: DescribeSendFileResultsResponseBodyInvocationsInvocationTags,
      targetDir: 'string',
      vmCount: 'number',
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

export class DescribeSendFileResultsResponseBodyInvocations extends $dara.Model {
  invocation?: DescribeSendFileResultsResponseBodyInvocationsInvocation[];
  static names(): { [key: string]: string } {
    return {
      invocation: 'Invocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocation: { 'type': 'array', 'itemType': DescribeSendFileResultsResponseBodyInvocationsInvocation },
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

export class DescribeSendFileResultsResponseBody extends $dara.Model {
  invocations?: DescribeSendFileResultsResponseBodyInvocations;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of file sending tasks queried.
   * 
   * @example
   * 2
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
      invocations: DescribeSendFileResultsResponseBodyInvocations,
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

