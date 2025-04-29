// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeInstances } from "./DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeInstances";
import { DescribeSendFileResultsResponseBodyInvocationsInvocationTags } from "./DescribeSendFileResultsResponseBodyInvocationsInvocationTags";


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

