// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelDataFlowTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may vary for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The data flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * df-194433a5be31****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this cancel request to check parameter validity and task state without actually canceling the task.
   * 
   * Valid values:
   * 
   * - true: Sends a check request without actually canceling the task. The check items include whether required parameters are specified, the request format, and the task state. If the check fails, the corresponding error is returned. If the check passes, HTTP status code 200 is returned.
   * - false (default): Sends a normal request and directly cancels the task after the check passes.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The file system ID.
   * 
   * - CPFS General-purpose: Must start with `cpfs-`, such as cpfs-125487\\*\\*\\*\\*.
   * 
   * - CPFS for Lingjun: Must start with `bmcpfs-`, such as bmcpfs-0015\\*\\*\\*\\*.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The data flow task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * task-38aa8e890f45****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataFlowId: 'DataFlowId',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataFlowId: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

