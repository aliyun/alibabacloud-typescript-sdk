// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodes } from "./DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodes";


export class DescribeSendFileResultsResponseBodyInvocationsInvocation extends $dara.Model {
  /**
   * @remarks
   * The command output.
   * 
   * If ContentEncoding is set to PlainText in the request, the original command output is returned. If ContentEncoding is set to Base64 in the request, the Base64-encoded command output is returned.
   * 
   * @example
   * Base64
   */
  content?: string;
  /**
   * @remarks
   * The content type of the file.
   * 
   * PlainText: The file content is not encoded. Base64: The file content is encoded in Base64. Default value: PlainText.
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
   * 2023-04-10T10:53:46.156+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The command description.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The user group of the file.
   * 
   * @example
   * root
   */
  fileGroup?: string;
  /**
   * @remarks
   * The permissions on the file.
   * 
   * @example
   * 0644
   */
  fileMode?: string;
  /**
   * @remarks
   * The owner of the file.
   * 
   * @example
   * root
   */
  fileOwner?: string;
  /**
   * @remarks
   * The overall sending status of the file. The overall sending status of the file varies based on the sending status of the file on all destination instances. Valid values:
   * 
   * *   Pending: The file is being verified or sent. If the sending state of the file on at least one instance is Pending, the overall sending state of the file is Pending.
   * 
   * *   Running: The file is being sent to the instance. If the sending state of the file on at least one instance is Running, the overall sending state of the file is Running.
   * 
   * *   Success: If the sending state of the file on all instances is Success, the overall sending state of the file is Success.
   * 
   * *   Failed: If the sending state of the file on all instances is Failed, the overall sending state of the file is Failed. If the sending state of the file on one or more instances is one of the following values, the overall sending state of the file is Failed:
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
   * Pending
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The file sending records.
   */
  invokeNodes?: DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodes;
  /**
   * @remarks
   * The name of the file sending task.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 3
   */
  nodeCount?: number;
  /**
   * @remarks
   * Indicates whether a file was overwritten in the destination directory if the file has the same name as the sent file.
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The destination directory.
   * 
   * @example
   * /home/user
   */
  targetDir?: string;
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
      invokeNodes: 'InvokeNodes',
      name: 'Name',
      nodeCount: 'NodeCount',
      overwrite: 'Overwrite',
      targetDir: 'TargetDir',
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
      invokeNodes: DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodes,
      name: 'string',
      nodeCount: 'number',
      overwrite: 'boolean',
      targetDir: 'string',
    };
  }

  validate() {
    if(this.invokeNodes && typeof (this.invokeNodes as any).validate === 'function') {
      (this.invokeNodes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

