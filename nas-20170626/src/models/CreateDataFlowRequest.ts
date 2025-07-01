// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDataFlowRequestAutoRefreshs } from "./CreateDataFlowRequestAutoRefreshs";


export class CreateDataFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The automatic update interval. CPFS checks whether data is updated in the directory at the interval specified by this parameter. If data is updated, CPFS starts an automatic update task. Unit: minutes.
   * 
   * Valid values: 10 to 525600. Default value: 10.
   * 
   * >  This parameter takes effect only for CPFS file systems.
   * 
   * @example
   * 10
   */
  autoRefreshInterval?: number;
  /**
   * @remarks
   * The automatic update policy. The updated data in the source storage is imported into the CPFS file system based on the policy.
   * 
   * *   None (default): Updated data in the source storage is not automatically imported into the CPFS file system. You can run a data flow task to import the updated data from the source storage.
   * *   ImportChanged: Updated data in the source storage is automatically imported into the CPFS file system.
   * 
   * >  This parameter takes effect only for CPFS file systems.
   * 
   * @example
   * None
   */
  autoRefreshPolicy?: string;
  /**
   * @remarks
   * The automatic update configurations.
   * 
   * >  This parameter takes effect only for CPFS file systems.
   * 
   * **if can be null:**
   * false
   */
  autoRefreshs?: CreateDataFlowRequestAutoRefreshs[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The value of RequestId may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
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
   * Bucket01 DataFlow
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * During the dry run, the system checks whether the request parameters are valid and whether the requested resources are available. During the dry run, no file system is created and no fee is incurred.
   * 
   * Valid values:
   * 
   * *   true: performs a dry run. The system checks the required parameters, request syntax, limits, and available NAS resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned. No value is returned for the FileSystemId parameter.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, a file system is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   The IDs of CPFS file systems must start with `cpfs-`. Example: cpfs-125487\\*\\*\\*\\*.
   * *   The IDs of CPFS for LINGJUN file systems must start with `bmcpfs-`. Example: bmcpfs-0015\\*\\*\\*\\*.
   * 
   * >  CPFS is not supported on the international site.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The directory in the CPFS for LINGJUN file system. Limits:
   * 
   * *   The directory must start and end with a forward slash (/).
   * *   The directory must be an existing directory in the CPFS for LINGJUN file system.
   * *   The directory must be 1 to 1023 characters in length.
   * *   The directory must be encoded in UTF-8.
   * 
   * >  This parameter is required for CPFS for LINGJUN file systems.
   * 
   * @example
   * /path/
   */
  fileSystemPath?: string;
  /**
   * @remarks
   * The fileset ID.
   * 
   * >  This parameter is required for CPFS file systems.
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
   * 
   * **if can be null:**
   * false
   */
  sourceSecurityType?: string;
  /**
   * @remarks
   * The access path of the source storage. Format: `<storage type>://[<account id>:]<path>`.
   * 
   * Parameters:
   * 
   * *   storage type: Only OSS is supported.
   * 
   * *   account id (optional): the UID of the account of the source storage. This parameter is required when you use OSS buckets across accounts.
   * 
   * *   path: the name of the OSS bucket. Limits:
   * 
   *     *   The name can contain only lowercase letters, digits, and hyphens (-). The name must start and end with a lowercase letter or digit.
   *     *   The name can be up to 128 characters in length.
   *     *   The name must be encoded in UTF-8.
   * 
   * > *   The OSS bucket must be an existing bucket in the region.
   * > *   Only CPFS for LINGJUN V2.6.0 and later support the account id parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://bucket1
   */
  sourceStorage?: string;
  /**
   * @remarks
   * The access path in the bucket of the source storage. Limits:
   * 
   * *   The path must start and end with a forward slash (/).
   * *   The path is case-sensitive.
   * *   The path must be 1 to 1023 characters in length.
   * *   The path must be encoded in UTF-8.
   * 
   * >  This parameter is required for CPFS for LINGJUN file systems.
   * 
   * @example
   * /prefix/
   */
  sourceStoragePath?: string;
  /**
   * @remarks
   * The maximum data flow throughput. Unit: MB/s. Valid values:
   * 
   * *   600
   * *   1200
   * *   1500
   * 
   * >  The data flow throughput must be less than the I/O throughput of the file system. This parameter is required for CPFS file systems.
   * 
   * @example
   * 600
   */
  throughput?: number;
  static names(): { [key: string]: string } {
    return {
      autoRefreshInterval: 'AutoRefreshInterval',
      autoRefreshPolicy: 'AutoRefreshPolicy',
      autoRefreshs: 'AutoRefreshs',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      fileSystemPath: 'FileSystemPath',
      fsetId: 'FsetId',
      sourceSecurityType: 'SourceSecurityType',
      sourceStorage: 'SourceStorage',
      sourceStoragePath: 'SourceStoragePath',
      throughput: 'Throughput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRefreshInterval: 'number',
      autoRefreshPolicy: 'string',
      autoRefreshs: { 'type': 'array', 'itemType': CreateDataFlowRequestAutoRefreshs },
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
      fileSystemPath: 'string',
      fsetId: 'string',
      sourceSecurityType: 'string',
      sourceStorage: 'string',
      sourceStoragePath: 'string',
      throughput: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.autoRefreshs)) {
      $dara.Model.validateArray(this.autoRefreshs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

