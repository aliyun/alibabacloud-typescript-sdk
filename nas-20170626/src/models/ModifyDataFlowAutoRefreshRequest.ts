// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDataFlowAutoRefreshRequest extends $dara.Model {
  /**
   * @remarks
   * The automatic update interval. CPFS checks the directory for data updates at each interval. If data updates exist, an automatic update task is started. Unit: minutes.
   * 
   * Valid values: 5 to 526600. Default value: 10.
   * 
   * @example
   * 10
   */
  autoRefreshInterval?: number;
  /**
   * @remarks
   * The automatic update policy. After data is updated on the source, this policy determines how the updated data is imported to CPFS. Valid values:
   * 
   * - None: Updated data on the source is not automatically imported to CPFS. You can import the updated data by using a dataflow task.
   * - ImportChanged: Updated data on the source is automatically imported to CPFS.
   * 
   * @example
   * None
   */
  autoRefreshPolicy?: string;
  /**
   * @remarks
   * Ensures the idempotency of the request. Generate a unique value from your client to ensure that the value is unique across different requests.
   * 
   * ClientToken supports only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotency](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may vary for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The dataflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * df-194433a5be31****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this request.
   * 
   * A dry run checks parameter validity and resource availability without actually creating an instance or incurring fees.
   * 
   * Valid values:
   * 
   * - true: Sends a dry run request without creating an instance. The check items include required parameters, request format, service limits, and NAS resource availability. If the check fails, the corresponding error is returned. If the check succeeds, HTTP status code 200 is returned, but FileSystemId is empty.
   * - false (default): Sends a normal request. After the check succeeds, the instance is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The file system ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRefreshInterval: 'AutoRefreshInterval',
      autoRefreshPolicy: 'AutoRefreshPolicy',
      clientToken: 'ClientToken',
      dataFlowId: 'DataFlowId',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRefreshInterval: 'number',
      autoRefreshPolicy: 'string',
      clientToken: 'string',
      dataFlowId: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

