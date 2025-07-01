// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataFlowsResponseBodyDataFlowInfoDataFlowAutoRefresh } from "./DescribeDataFlowsResponseBodyDataFlowInfoDataFlowAutoRefresh";


export class DescribeDataFlowsResponseBodyDataFlowInfoDataFlow extends $dara.Model {
  /**
   * @remarks
   * The details about automatic update policies.
   * 
   * >  Only CPFS supports this parameter.
   */
  autoRefresh?: DescribeDataFlowsResponseBodyDataFlowInfoDataFlowAutoRefresh;
  /**
   * @remarks
   * The automatic update interval. CPFS checks whether data is updated in the directory at the interval specified by this parameter. If data is updated, CPFS starts an automatic update task. Unit: minutes.
   * 
   * Valid values: 5 to 526600. Default value: 10.
   * 
   * >  Only CPFS supports this parameter.
   * 
   * @example
   * 10
   */
  autoRefreshInterval?: number;
  /**
   * @remarks
   * The automatic update policy. The updated data in the source storage is imported into the CPFS file system based on the policy. Valid values:
   * 
   * *   None: Updated data in the source storage is not automatically imported into the CPFS file system. You can run a data flow task to import the updated data from the source storage.
   * *   ImportChanged: Updated data in the source storage is automatically imported into the CPFS file system.
   * 
   * >  Only CPFS supports this parameter.
   * 
   * @example
   * None
   */
  autoRefreshPolicy?: string;
  /**
   * @remarks
   * The time when the fileset was created.
   * 
   * The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2021-09-30T10:08:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The dataflow ID.
   * 
   * @example
   * df-194433a5be31****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * The description of the dataflow.
   * 
   * Limits:
   * 
   * *   The description must be 2 to 128 characters in length.
   * *   The description must start with a letter but cannot start with `http://` or `https://`.
   * *   The description can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The error message returned. Valid values:
   * 
   * *   None (default): The dataflow status is normal.
   * *   SourceStorageUnreachable: The access path of the source storage is not found.
   * *   ThroughputTooLow: The dataflow throughput is low.
   * 
   * @example
   * SourceStorageUnreachable
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The directory of the fileset in the CPFS file system.
   * 
   * Limits:
   * 
   * *   The directory must be 2 to 1,024 characters in length.
   * *   The directory must be encoded in UTF-8.
   * *   The directory must start and end with a forward slash (/).
   * *   The directory must be a fileset directory in the CPFS file system.
   * 
   * >  Only CPFS supports this parameter.
   * 
   * @example
   * /a/b/c/
   */
  fileSystemPath?: string;
  /**
   * @remarks
   * The description of the automatic update.
   * 
   * >  Only CPFS supports this parameter.
   * 
   * @example
   * FsetTest
   */
  fsetDescription?: string;
  /**
   * @remarks
   * The fileset ID.
   * 
   * @example
   * fset-1902718ea0ae****
   */
  fsetId?: string;
  /**
   * @remarks
   * The type of security mechanism for the source storage. This parameter must be specified if the source storage is accessed with a security mechanism. Valid values:
   * 
   * *   None (default): The source storage can be accessed without a security mechanism.
   * *   SSL: The source storage must be accessed with an SSL certificate.
   * 
   * @example
   * SSL
   */
  sourceSecurityType?: string;
  /**
   * @remarks
   * The access path of the source storage. Format: `<storage type>://<path>`.
   * 
   * Parameters:
   * 
   * *   storage type: Only Object Storage Service (OSS) is supported.
   * 
   * *   path: the name of the OSS bucket.
   * 
   *     *   The name can contain only lowercase letters, digits, and hyphens (-). The name must start and end with a lowercase letter or digit.
   *     *   The name must be 8 to 128 characters in length.
   *     *   The name must be encoded in UTF-8.
   *     *   The name cannot start with http:// or https://.
   * 
   * >  The OSS bucket must be an existing bucket in the region.
   * 
   * @example
   * oss://bucket1
   */
  sourceStorage?: string;
  /**
   * @remarks
   * The access path in the bucket of the source storage.
   * 
   * >  Only CPFS for LINGJUN supports this parameter.
   * 
   * @example
   * /prefix/
   */
  sourceStoragePath?: string;
  /**
   * @remarks
   * The dataflow status. Valid values:
   * 
   * *   Starting: The dataflow is being created or enabled.
   * *   Running: The dataflow has been created and is running properly.
   * *   Updating: The dataflow is being modified. For example, the dataflow throughput is increased and the automatic update interval is modified.
   * *   Deleting: The dataflow is being deleted.
   * *   Stopping: The dataflow is being disabled.
   * *   Stopped: The dataflow has been disabled.
   * *   Misconfigured: The dataflow configuration is abnormal. For example, the source storage is inaccessible, and the automatic update cannot be completed due to low dataflow throughput.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The maximum dataflow throughput. Unit: MB/s. Valid values:
   * 
   * *   600
   * *   1,200
   * *   1,500
   * 
   * >  The dataflow throughput must be less than the I/O throughput of the file system.
   * 
   * @example
   * 600
   */
  throughput?: number;
  /**
   * @remarks
   * The time when the fileset was last updated.
   * 
   * The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2021-09-30T10:08:08Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      autoRefresh: 'AutoRefresh',
      autoRefreshInterval: 'AutoRefreshInterval',
      autoRefreshPolicy: 'AutoRefreshPolicy',
      createTime: 'CreateTime',
      dataFlowId: 'DataFlowId',
      description: 'Description',
      errorMessage: 'ErrorMessage',
      fileSystemId: 'FileSystemId',
      fileSystemPath: 'FileSystemPath',
      fsetDescription: 'FsetDescription',
      fsetId: 'FsetId',
      sourceSecurityType: 'SourceSecurityType',
      sourceStorage: 'SourceStorage',
      sourceStoragePath: 'SourceStoragePath',
      status: 'Status',
      throughput: 'Throughput',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRefresh: DescribeDataFlowsResponseBodyDataFlowInfoDataFlowAutoRefresh,
      autoRefreshInterval: 'number',
      autoRefreshPolicy: 'string',
      createTime: 'string',
      dataFlowId: 'string',
      description: 'string',
      errorMessage: 'string',
      fileSystemId: 'string',
      fileSystemPath: 'string',
      fsetDescription: 'string',
      fsetId: 'string',
      sourceSecurityType: 'string',
      sourceStorage: 'string',
      sourceStoragePath: 'string',
      status: 'string',
      throughput: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.autoRefresh && typeof (this.autoRefresh as any).validate === 'function') {
      (this.autoRefresh as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

