// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataFlowRequestAutoRefreshs extends $dara.Model {
  /**
   * @remarks
   * The auto-refresh directory. CPFS General-purpose registers data modification events from the source storage and checks whether the source data in this directory has been updated, then automatically imports the updated data.
   * 
   * The default value is empty, which means that data updates in the source storage are not automatically imported to CPFS General-purpose. You must manually create a task to import updates.
   * 
   * Limits:
   * 
   * - The path must be 2 to 1024 characters in length.
   * - UTF-8 encoding is used.
   * - The path must start and end with a forward slash (/).
   * - The directory must be an existing directory in the CPFS General-purpose file system and must be located within the Fileset directory of the data flow.
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
   * The auto-refresh interval. CPFS General-purpose checks the directory for data updates at this interval. If data updates exist, an auto-refresh task is started. Unit: minutes.
   * 
   * Valid values: 10 to 525600. Default value: 10.
   * > This parameter takes effect only when the file system type is CPFS General-purpose.
   * 
   * @example
   * 10
   */
  autoRefreshInterval?: number;
  /**
   * @remarks
   * The auto-refresh policy. Specifies the policy for importing data updates from the source storage to CPFS General-purpose after the source data is updated. Valid values:
   * 
   * - None (default): Data updates in the source storage are not automatically imported to CPFS General-purpose. You can import data updates from the source storage by using a data flow task.
   * - ImportChanged: Data updates in the source storage are automatically imported to CPFS General-purpose.
   * > This parameter takes effect only when the file system type is CPFS General-purpose.
   * 
   * @example
   * None
   */
  autoRefreshPolicy?: string;
  /**
   * @remarks
   * The auto-refresh configuration collection.
   * > This parameter takes effect only when the file system type is CPFS General-purpose.
   * 
   * **if can be null:**
   * false
   */
  autoRefreshs?: CreateDataFlowRequestAutoRefreshs[];
  /**
   * @remarks
   * Ensures the idempotence of the request. Generate a parameter value from your client to ensure that the value is unique across different requests.
   * 
   * ClientToken supports only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may differ for each API request.
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
   * - The description must start with a letter.
   * - The description cannot start with `http://` or `https://`.
   * - The description can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * Bucket01 DataFlow
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this create request.
   * 
   * A dry run checks parameter validity and resource availability without actually creating the instance or incurring charges.
   * 
   * Valid values:
   * 
   * - true: Sends a dry run request without creating the instance. The check items include required parameters, request format, business limits, and NAS inventory. If the check fails, the corresponding error is returned. If the check succeeds, HTTP status code 200 is returned, but FileSystemId is empty.
   * - false (default): Sends a normal request and creates the instance after the check is passed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The file system ID.
   * 
   * - CPFS General-purpose: must start with `cpfs-`, such as cpfs-125487\\*\\*\\*\\*.
   * 
   * - CPFS for Lingjun: must start with `bmcpfs-`, such as bmcpfs-0015\\*\\*\\*\\*.
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
   * - The path must start and end with a forward slash (/).
   * 
   * - The directory must be an existing directory in the CPFS for Lingjun file system.
   * 
   * - The path must be 1 to 1023 characters in length.
   * 
   * - UTF-8 encoding is used.
   * 
   * > This parameter is required when the file system type is CPFS for Lingjun.
   * 
   * @example
   * /path/
   */
  fileSystemPath?: string;
  /**
   * @remarks
   * The Fileset ID.
   * > This parameter is required when the file system type is CPFS General-purpose.
   * 
   * @example
   * fset-1902718ea0ae****
   */
  fsetId?: string;
  /**
   * @remarks
   * The security protection type of the source storage. If the source storage must be accessed through security protection, specify the security protection type. Valid values:
   * 
   * - None (default): The source storage does not require security protection for access.
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
   * - storage type: only oss is supported.
   * - account id: optional. The UID of the account that owns the source storage. This parameter is required when you use cross-account OSS.
   * - path: the name of the OSS bucket. Limits:
   * 
   *     - Only lowercase letters, digits, and hyphens (-) are supported. The name must start and end with a lowercase letter or digit.
   * 
   *     - The maximum length is 128 characters.
   * 
   *     - UTF-8 encoding is used.
   * 
   * > - The OSS bucket must be an existing bucket in the region.
   * > - The account id parameter is supported only by CPFS for Lingjun 2.6.0 and later.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://178321033379****:bucket-01
   */
  sourceStorage?: string;
  /**
   * @remarks
   * The access path within the source storage bucket. Limits:
   * 
   *    - The path must start and end with a forward slash (/).
   * 
   * - The path is case-sensitive.
   * 
   * - The path must be 1 to 1023 characters in length.
   * 
   * - UTF-8 encoding is used.
   * 
   * > This parameter is required when the file system type is CPFS for Lingjun.
   * 
   * @example
   * /prefix/
   */
  sourceStoragePath?: string;
  /**
   * @remarks
   * The maximum transfer bandwidth of the data flow. Unit: MB/s. Valid values: 
   * 
   * - 600
   * - 1200
   * - 1500
   * 
   * > The transfer bandwidth of the data flow must be less than the I/O bandwidth of the file system.
   * > This parameter is required when the file system type is CPFS General-purpose.
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

