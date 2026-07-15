// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDataFlowRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures the idempotency of the request. Generate a parameter value from your client to ensure that the value is unique across different requests.
   * 
   * ClientToken supports only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotency](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may differ for each API request.
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
   * The description of the data flow. 
   * 
   * Limits:
   * 
   * - The description must be 2 to 128 characters in length.
   * - The description must start with a letter and cannot start with http:// or https://.
   * - The description can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * Bucket01数据流动
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this request.
   * 
   * A dry run checks parameter validity and resource availability without actually creating the instance or incurring charges.
   * 
   * Valid values:
   * 
   * - true: Sends a check request without creating the instance. The check items include whether required parameters are specified, the request format, business limitations, and NAS inventory. If the check fails, the corresponding error is returned. If the check passes, HTTP status code 200 is returned, but FileSystemId is empty.
   * - false (default): Sends a normal request. After the check passes, the instance is directly created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The file system ID.
   * 
   * - CPFS: The ID must start with `cpfs-`, such as cpfs-125487\\*\\*\\*\\*.
   * 
   * - CPFS for Lingjun: The ID must start with `bmcpfs-`, such as bmcpfs-0015\\*\\*\\*\\*.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The maximum transmission bandwidth of the data flow. Unit: MB/s.
   * Valid values: 
   * 
   * - 600
   * - 1200
   * - 1500
   * 
   * > The transmission bandwidth of the data flow must be less than the I/O bandwidth of the file system. This parameter is required when the file system type is CPFS.
   * 
   * @example
   * 600
   */
  throughput?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataFlowId: 'DataFlowId',
      description: 'Description',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      throughput: 'Throughput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataFlowId: 'string',
      description: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
      throughput: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

