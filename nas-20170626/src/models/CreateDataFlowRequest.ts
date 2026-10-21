// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataFlowRequestAutoRefreshs extends $dara.Model {
  /**
   * @remarks
   * The auto-refresh directory. General-purpose CPFS registers data modification events of the source storage, checks whether the source data in this directory is updated, and automatically imports the updated data.
   * 
   * By default, this parameter is empty. Data updates in the source storage are not automatically imported to General-purpose CPFS. You must create a manual task to import the updates.
   * 
   * Limits:
   * 
   * - The directory must be 2 to 1,024 characters in length.
   * - The directory must be encoded in UTF-8.
   * - The directory must start and end with a forward slash (/).
   * - The directory must already exist in General-purpose CPFS and must be located in the fileset directory of the data flow.
   * 
   * @example
   * /prefix1/prefix2/
   * 
   * **if can be null:**
   * true
   */
  refreshPath?: string;
  static names(): { [key: string]: string } {
    return {
      refreshPath: 'RefreshPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refreshPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The auto-refresh interval. General-purpose CPFS checks whether data updates exist in the directory at this interval. If data updates exist, an auto-refresh task is started. Unit: minutes.
   * 
   * Valid values: 10 to 525600. Default value: 10.
   * > This parameter takes effect only when the file system type is General-purpose CPFS.
   * 
   * @example
   * 10
   */
  autoRefreshInterval?: number;
  /**
   * @remarks
   * The auto-refresh policy. This policy determines how data updates from the source storage are imported to General-purpose CPFS.
   * 
   * - None: Data updates from the source storage are not automatically imported to General-purpose CPFS. You can use a data flow task to import the updates. This is the default value.
   * - ImportChanged: Data updates from the source storage are automatically imported to General-purpose CPFS.
   * > This parameter takes effect only when the file system type is General-purpose CPFS.
   * 
   * @example
   * None
   */
  autoRefreshPolicy?: string;
  /**
   * @remarks
   * The auto-refresh configurations.
   * > This parameter takes effect only when the file system type is General-purpose CPFS.
   * 
   * **if can be null:**
   * false
   */
  autoRefreshs?: CreateDataFlowRequestAutoRefreshs[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can generate the token on your client to ensure that the token is unique across different requests.
   * 
   * The client token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the data flow. 
   * 
   * Limits:
   * 
   * - The description must be 2 to 128 characters in length.
   * - The description must start with a letter and cannot start with `http://` or `https://`.
   * - The description can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * Bucket01 DataFlow
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the creation request.
   * 
   * A dry run helps you check parameter validity and resource availability without actually creating the instance or incurring fees.
   * 
   * Valid values:
   * 
   * - true: A dry run is performed and no instance is created. The system checks whether required parameters are specified, the request format, business limits, and NAS resource availability. If the request fails the dry run, an error is returned. If the request passes the dry run, the HTTP status code 200 is returned, but the FileSystemId parameter is empty.
   * - false: A regular request is sent. If the request passes the dry run, the instance is created. This is the default value.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The file system ID.
   * 
   * - General-purpose CPFS: The ID must start with `cpfs-`, such as cpfs-125487\\*\\*\\*\\*.
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
   * The directory in the CPFS for Lingjun file system. Limits:
   * 
   * - The directory must start and end with a forward slash (/).
   * 
   * - The directory must already exist in the CPFS for Lingjun file system.
   * 
   * - The directory must be 1 to 1,023 characters in length.
   * 
   * - The directory must be encoded in UTF-8.
   * 
   * > This parameter is required when the file system type is CPFS for Lingjun.
   * 
   * @example
   * /path/
   */
  fileSystemPath?: string;
  /**
   * @remarks
   * The fileset ID.
   * > This parameter is required when the file system type is General-purpose CPFS.
   * 
   * @example
   * fset-1902718ea0ae****
   */
  fsetId?: string;
  /**
   * @remarks
   * The security protection type of the source storage. If the source storage must be accessed through security protection, specify the security protection type. Valid values:
   * 
   * - None: The source storage does not require security protection for access. This is the default value.
   * - SSL: Access is protected by an SSL certificate.
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
   * The access address of the source storage. Format: `<storage type>://[<account id>:]<path>`.
   * 
   * Where:
   * 
   * - storage type: Only oss is supported.
   * - account id: Optional. The UID of the account to which the source storage belongs. This parameter is required when you use a cross-account OSS bucket.
   * - path: The name of the OSS bucket. Limits:
   * 
   *     - The name can contain only lowercase letters, digits, and hyphens (-), and must start and end with a lowercase letter or a digit.
   * 
   *     - The name can be up to 128 characters in length.
   * 
   *     - The name must be encoded in UTF-8.
   * 
   * > - The OSS bucket must already exist in the region.
   * > - The account id parameter is supported only in CPFS for Lingjun 2.6.0 and later.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://178321033379****:bucket-01
   */
  sourceStorage?: string;
  /**
   * @remarks
   * The access path in the source storage bucket. Limits:
   * 
   * - The path must start and end with a forward slash (/).
   * 
   * - The path is case-sensitive.
   * 
   * - The path must be 1 to 1,023 characters in length.
   * 
   * - The path must be encoded in UTF-8.
   * 
   * > This parameter is required when the file system type is CPFS for Lingjun.
   * 
   * @example
   * /prefix/
   */
  sourceStoragePath?: string;
  /**
   * @remarks
   * The maximum transmission bandwidth of the data flow. Unit: MB/s. Valid values: 
   * 
   * - 600
   * - 1200
   * - 1500
   * 
   * > The transmission bandwidth of the data flow must be less than the I/O bandwidth of the file system.
   * > This parameter is required when the file system type is General-purpose CPFS.
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

