// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodes } from "./DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodes";


export class DescribeSendFileResultsResponseBodyInvocationsInvocation extends $dara.Model {
  /**
   * @remarks
   * Output information after command execution.
   * 
   * If ContentEncoding is specified as PlainText, the original output information is returned.
   * If ContentEncoding is specified as Base64, the Base64 encoded output information is returned.
   * 
   * @example
   * Base64
   */
  content?: string;
  /**
   * @remarks
   * File content type.
   * 
   * PlainText: Plain text.
   * Base64: Base64 encoding.
   * The default value is PlainText.
   * 
   * @example
   * PlainText
   */
  contentType?: string;
  /**
   * @remarks
   * Creation time of the distribution.
   * 
   * @example
   * 2023-04-10T10:53:46.156+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * Command description.
   * 
   * @example
   * 描述信息。
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
   * File permissions.
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
   * Overall status of the file distribution. The overall status depends on the common execution status of all instances involved in this distribution, possible values are:
   * 
   * - Pending: The system is verifying or distributing the file. If at least one instance has a file distribution status of Pending, the overall execution status will be Pending.
   * - Running: The file is being distributed on the instance. If at least one instance has a file distribution status of Running, the overall execution status will be Running.
   * - Success: All instances have a file distribution status of Success, then the overall execution status will be Success.
   * - Failed: All instances have a file distribution status of Failed, then the overall execution status will be Failed. If any of the following conditions occur for the file distribution status on an instance, the return value will be Failed:
   *     - The specified file parameters are incorrect, verification failed (Invalid).
   *     - Failed to distribute the file to the instance (Aborted).
   *     - The file creation failed within the instance (Failed).
   *     - The file distribution timed out (Timeout).
   *     - An exception occurred during file distribution and could not continue (Error).
   * - PartialFailed: Some instances successfully received the file while others failed. If the file distribution status of all instances is either Success or Failed, the overall execution status will be PartialFailed.
   * 
   * @example
   * Pending
   */
  invocationStatus?: string;
  /**
   * @remarks
   * Record of file distribution.
   */
  invokeNodes?: DescribeSendFileResultsResponseBodyInvocationsInvocationInvokeNodes;
  /**
   * @remarks
   * Name of the file distribution.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Number of nodes
   * 
   * @example
   * 3
   */
  nodeCount?: number;
  /**
   * @remarks
   * Whether to overwrite the file if a file with the same name already exists in the target directory.
   * - true: Overwrite.
   * - false: Do not overwrite.
   * 
   * The default value is false.
   * 
   * @example
   * true
   */
  overwrite?: boolean;
  /**
   * @remarks
   * Target path.
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

