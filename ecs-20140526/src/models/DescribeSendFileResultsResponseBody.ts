// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeInstancesInvokeInstance extends $dara.Model {
  /**
   * @remarks
   * The creation time of the file sending task.
   * 
   * @example
   * 2019-12-20T06:15:54Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The error code returned when the file failed to be sent to the instance. Valid values:
   * 
   * *   Null: The file is sent to the instance.
   * *   InstanceNotExists: The instance does not exist or has been released.
   * *   InstanceReleased: The instance is released while the file is being sent.
   * *   InstanceNotRunning: The instance is not running when the file sending task is being created.
   * *   AccountNotExists: The specified account does not exist.
   * *   ClientNotRunning: Cloud Assistant Agent is not running.
   * *   ClientNotResponse: Cloud Assistant Agent does not respond.
   * *   ClientIsUpgrading: Cloud Assistant Agent is being upgraded.
   * *   ClientNeedUpgrade: Cloud Assistant Agent needs to be upgraded.
   * *   DeliveryTimeout: The file sending task timed out.
   * *   FileCreateFail: The file failed to be created.
   * *   FileAlreadyExists: A file with the same name exists in the specified directory.
   * *   FileContentInvalid: The file content is invalid.
   * *   FileNameInvalid: The file name is invalid.
   * *   FilePathInvalid: The specified directory is invalid.
   * *   FileAuthorityInvalid: The specified permissions on the file are invalid.
   * *   UserGroupNotExists: The specified user group does not exist.
   * 
   * @example
   * InstanceNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the file failed to be sent or the file sending task failed to be executed. Valid values:
   * 
   * *   Null: The file is sent to the instance.
   * *   the specified instance does not exists
   * *   the specified instance has been released
   * *   the instance is not running when create task
   * *   the specified account does not exists
   * *   the aliyun service is not running on the instance
   * *   the aliyun service in the instance does not response
   * *   the aliyun service in the instance is upgrading now
   * *   the aliyun service in the instance need upgrade
   * *   the command delivery has been timeout
   * *   the file creation is failed due to unknown error
   * *   the authority of file is invalid
   * *   File content is empty
   * *   the content of file is invalid
   * *   File already exists
   * *   File name is invalid
   * *   File path is invalid
   * *   Owner not exists
   * *   Group not exists
   * *   Mode is invalid
   * 
   * @example
   * the instance is not running when create task
   */
  errorInfo?: string;
  /**
   * @remarks
   * The time when the file sending task was completed.
   * 
   * @example
   * 2019-12-20T06:15:54Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-uf614fhehhz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the file sending task. Valid values:
   * 
   * *   Pending: The file is being verified or sent.
   * *   Invalid: The file is invalid.
   * *   Running: The file is being sent to the instance.
   * *   Aborted: The file failed to be sent to the instance.
   * *   Success: The file is sent.
   * *   Failed: The file failed to be created on the instance.
   * *   Error: An error occurred and interrupted the file sending task.
   * *   Timeout: The file sending task timed out.
   * 
   * @example
   * Success
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The time when the file sending task started to be executed on the instance.
   * 
   * @example
   * 2019-12-20T06:15:54Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time when the task status was last updated.
   * 
   * @example
   * 2019-12-20T06:15:54Z
   */
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
  /**
   * @remarks
   * The tag key of the file sending task.
   * 
   * @example
   * owner
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the file sending task.
   * 
   * @example
   * zhangsan
   */
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
  /**
   * @remarks
   * The content of the file.
   * 
   * @example
   * #!/bin/bash  echo "Current User is :"  echo $(ps | grep "$$" | awk \\"{print $2}\\")
   */
  content?: string;
  /**
   * @remarks
   * The type of the file content. Valid values:
   * 
   * *   PlainText: The file content is not encoded.
   * *   Base64: The file content is encoded in Base64.
   * 
   * @example
   * PlainText
   */
  contentType?: string;
  /**
   * @remarks
   * The time when the file sending task was created.
   * 
   * @example
   * 2019-12-20T06:15:54Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the file.
   * 
   * @example
   * This is a test file.
   */
  description?: string;
  /**
   * @remarks
   * The group of the file.
   * 
   * @example
   * test
   */
  fileGroup?: string;
  /**
   * @remarks
   * The permissions on the file.
   * 
   * @example
   * 777
   */
  fileMode?: string;
  /**
   * @remarks
   * The owner of the file.
   * 
   * @example
   * test
   */
  fileOwner?: string;
  /**
   * @remarks
   * The overall sending status of the file. The overall sending status of the file varies based on the sending status of the file on all destination instances. Valid values:
   * 
   * *   Pending: The file is being verified or sent. If the sending state of the file on at least one instance is Pending, the overall sending state of the file is Pending.
   * 
   * *   Running: The file is being sent to the instances. If the sending state of the file on at least one instance is Running, the overall sending state of the file is Running.
   * 
   * *   Success: If the sending state of the file on all instances is Success, the overall sending state of the file is Success.
   * 
   * *   If the sending state of the file on all instances is Failed, the overall sending state of the file is Failed. If the sending state of the file on one or more instances is one of the following values, the overall sending state of the file is Failed:
   * 
   *     *   Invalid: The file is invalid.
   *     *   Aborted: The file failed to be sent to the instances.
   *     *   Failed: The file failed to be created on the instances.
   *     *   Timeout: The file sending task timed out.
   *     *   Error: An error occurred and interrupted the file sending task.
   * 
   * *   PartialFailed: The file sending task was completed on some instances but failed on other instances. If the sending state of the file is Success on some instances and is Failed on other instances, the overall sending state of the file is PartialFailed.
   * 
   * @example
   * Success
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The ID of the file sending task.
   * 
   * @example
   * f-hz0jdfwd9f****
   */
  invokeId?: string;
  /**
   * @remarks
   * The destination instances.
   */
  invokeInstances?: DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeInstances;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * test.txt
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether a file in the destination directory is overwritten if the file has the same name as the sent file.
   * 
   * @example
   * false
   */
  overwrite?: string;
  /**
   * @remarks
   * The tags of the file sending task.
   */
  tags?: DescribeSendFileResultsResponseBodyInvocationsInvocationTags;
  /**
   * @remarks
   * The destination directory.
   * 
   * @example
   * /home/user
   */
  targetDir?: string;
  /**
   * @remarks
   * The number of the destination instances.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The file sending records.
   */
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

