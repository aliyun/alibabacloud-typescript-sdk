// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelDataFlowTaskRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token that you can use to ensure the idempotence of the request. The token must be unique across different requests.
   * 
   * The `ClientToken` value must be an ASCII string of 64 characters or less. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the request ID as the `ClientToken`. The request ID is unique for each request.
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
   * Specifies whether to perform a dry run for the request.
   * 
   * A dry run checks for parameter validity and resource availability without actually canceling the task or incurring charges.
   * 
   * Valid values:
   * 
   * - `true`: Performs a dry run. The system checks the request for potential issues, including missing parameters, invalid formats, and service limits. If the check fails, the system returns an error message; otherwise, it returns a success code.
   * 
   * - `false` (default): Sends a normal request. After the request passes the check, the task is canceled.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The file system ID.
   * 
   * - For a general-purpose CPFS instance, the ID must start with `cpfs-`, for example, `cpfs-125487****`.
   * 
   * - For a CPFS for AI Computing instance, the ID must start with `bmcpfs-`, for example, `bmcpfs-0015****`.
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

