// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataFlowTaskRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token that ensures the idempotence of the request. The token must be unique across different requests.
   * 
   * `ClientToken` can contain only ASCII characters and must not exceed 64 characters. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the `RequestId` of the API request as the `ClientToken`. The `RequestId` may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The conflict policy for files with the same name.
   * Valid values:
   * 
   * - SKIP_THE_FILE: Skips files with the same name.
   * 
   * - KEEP_LATEST: Compares update times and keeps the latest version.
   * 
   * - OVERWRITE_EXISTING: Forcibly overwrites files with the same name.
   * 
   * > This parameter is required if the file system is a CPFS AI-Computing Edition instance.
   * 
   * @example
   * SKIP_THE_FILE
   */
  conflictPolicy?: string;
  /**
   * @remarks
   * Specifies whether to automatically create the directory if it does not exist.
   * Valid values:
   * 
   * - true: Automatically creates the directory.
   * 
   * - false (default): Does not automatically create the directory.
   * 
   * > * This parameter takes effect only when `TaskAction` is set to `Import`.
   * >
   * > * This parameter is supported only by CPFS AI-Computing Edition V2.6.0 and later.
   * 
   * @example
   * false
   */
  createDirIfNotExist?: boolean;
  /**
   * @remarks
   * The ID of the data flow.
   * 
   * This parameter is required.
   * 
   * @example
   * df-194433a5be31****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * The data type that the data flow task operates on.
   * 
   * Valid values:
   * 
   * - Metadata: The metadata of the file, including attributes such as timestamp, ownership, and permissions. If you select `Metadata`, only the file metadata is imported. You can see the file, but when you access the file data, it is loaded from the source storage on demand.
   * 
   * - Data: The data blocks of the file.
   * 
   * - MetaAndData: The metadata and data blocks of the file.
   * 
   * @example
   * Metadata
   */
  dataType?: string;
  /**
   * @remarks
   * The source directory of the data.
   * 
   * Limits:
   * 
   * - The length must be 1 to 1,023 characters.
   * 
   * - The directory must be UTF-8 encoded.
   * 
   * - The directory must start and end with a forward slash (`/`).
   * 
   * - Only one directory can be specified at a time.
   * 
   * - If `TaskAction` is `Export`, this directory must be a relative path within `FileSystemPath`.
   * 
   * - If `TaskAction` is `Import`, this directory must be a relative path within `SourceStoragePath`.
   * 
   * - If `TaskAction` is `StreamExport`, this directory must be a relative path within `FileSystemPath`.
   * 
   * - If `TaskAction` is `StreamImport`, this directory must be a relative path within `SourceStoragePath`.
   * 
   * > `StreamImport` and `StreamExport` are supported only by CPFS AI-Computing Edition V2.6.0 and later.
   * 
   * @example
   * /path_in_cpfs/
   */
  directory?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this creation request.
   * 
   * A dry run checks parameter validity and inventory without creating an instance or incurring charges.
   * 
   * Valid values:
   * 
   * - true: Sends a check request without creating the instance. The system checks for required parameters, request format, business limits, and NAS inventory. If the check fails, an error is returned. If the check passes, an HTTP 200 status code is returned, but `TaskId` is empty.
   * 
   * - false (default): Sends a normal request and creates the instance after the check passes.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The destination directory for the data flow task mapping.
   * Limits:
   * 
   * - The directory must start and end with a forward slash (`/`). The `/../` sequence is not supported.
   * 
   * - The length must be 1 to 1,023 characters.
   * 
   * - The directory must be UTF-8 encoded.
   * 
   * - Only one directory can be specified at a time.
   * 
   * - If `TaskAction` is `Export`, this directory must be a relative path within `SourceStoragePath`.
   * 
   * - If `TaskAction` is `Import`, this directory must be a relative path within `FileSystemPath`.
   * 
   * - If `TaskAction` is `StreamExport`, this directory must be a relative path within `SourceStoragePath`.
   * 
   * - If `TaskAction` is `StreamImport`, this directory must be a relative path within `FileSystemPath`.
   * 
   * > `StreamImport` and `StreamExport` are supported only by CPFS AI-Computing Edition V2.6.0 and later.
   * 
   * @example
   * /path_in_cpfs/
   */
  dstDirectory?: string;
  /**
   * @remarks
   * The list of files for the data flow task to execute.
   * 
   * Limits:
   * 
   * - The list must be UTF-8 encoded.
   * 
   * - The total length of the file list must be less than 64 KB.
   * 
   * - The file list must be in JSON format.
   * 
   * - The path of a single file must be 1 to 1,023 characters in length and must start with a forward slash (`/`).
   * 
   * - If `TaskAction` is `Import`, each element in the list represents an OSS Object name.
   * 
   * - If `TaskAction` is `Export`, each element in the list represents a CPFS file path.
   * 
   * @example
   * ["/path_in_cpfs/file1", "/path_in_cpfs/file2"]
   */
  entryList?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * - CPFS General Purpose Edition: The ID must start with `cpfs-`, such as `cpfs-125487****`.
   * 
   * - CPFS AI-Computing Edition: The ID must start with `bmcpfs-`, such as `bmcpfs-0015****`.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * Filters the subdirectories under the `Directory` parameter and transfers the content of the filtered subdirectories.
   * 
   * > - This parameter takes effect only when the `Directory` parameter is specified.
   * >
   * > - The path of a single folder must be 1 to 1,023 characters in length and must start and end with a forward slash (`/`). The total length cannot exceed 3,000 characters.
   * >
   * > - This feature is supported only by CPFS AI-Computing Edition.
   * 
   * @example
   * ["/test/","/test1/"]
   */
  includes?: string;
  /**
   * @remarks
   * If you specify `SrcTaskId`, enter the ID of a data flow task. The system copies the `TaskAction`, `DataType`, and `EntryList` parameter information from the specified task. You do not need to specify these parameters.
   * 
   * > Data flow streaming tasks are not supported.
   * 
   * @example
   * task-29ee8e890f45****
   */
  srcTaskId?: string;
  /**
   * @remarks
   * The type of the data flow task.
   * 
   * Valid values:
   * 
   * - Import: Imports specified data from the source storage to the CPFS file system.
   * 
   * - Export: Exports specified data from the CPFS file system to the source storage.
   * 
   * - StreamImport: Imports a large amount of specified data from the source storage to the CPFS file system.
   * 
   * - StreamExport: Exports a large amount of specified data from the CPFS file system to the source storage.
   * 
   * - Evict: Releases the data blocks of a file from the CPFS file system. After the release, only the metadata of the file is retained. You can still query the file, but its data blocks are cleared and no longer occupy storage capacity. When you access the file data, it is loaded from the source storage on demand.
   * 
   * - Inventory: Obtains the inventory of files managed by a data flow for the CPFS file system. This provides the cache status of files in the data flow.
   * 
   * > CPFS AI-Computing Edition supports only `Import`, `Export`, `StreamImport`, and `StreamExport`. `StreamImport` and `StreamExport` are supported only by CPFS AI-Computing Edition V2.6.0 and later.
   * 
   * @example
   * Import
   */
  taskAction?: string;
  /**
   * @remarks
   * Specifies an OSS directory. Data is synchronized based on the content of the CSV files in this directory. The following limits apply.
   * 
   * - The path must start and end with a forward slash (`/`).
   * 
   * - The path is case-sensitive.
   * 
   * - The length must be between 1 and 1,023 characters.
   * 
   * - The path must be UTF-8 encoded.
   * 
   * > * `TransferFileListPath`, `Directory`, and `EntryList` are mutually exclusive. You can specify only one of them.
   * >
   * > * This parameter specifies an existing path in OSS. The `*.csv` files are stored in this path.
   * >
   * > * `TransferFileListPath` supports only the `Import` and `Export` features.
   * >
   * > * For an `Import` task, the files or directories specified in the CSV file are imported from OSS to the CPFS file system.
   * >
   * > * For an `Export` task, the files or directories specified in the CSV file are exported from the CPFS file system to OSS.
   * >
   * > * The CSV file must contain `Name` and `Type` columns. `Name` is the relative path. `Type` can be `dir` or `file`. If `Type` is `dir`, the `Name` value must end with a forward slash (`/`).
   * >
   * > * This feature is supported only by CPFS AI-Computing Edition.
   * 
   * @example
   * /test_oss_path/
   */
  transferFileListPath?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      conflictPolicy: 'ConflictPolicy',
      createDirIfNotExist: 'CreateDirIfNotExist',
      dataFlowId: 'DataFlowId',
      dataType: 'DataType',
      directory: 'Directory',
      dryRun: 'DryRun',
      dstDirectory: 'DstDirectory',
      entryList: 'EntryList',
      fileSystemId: 'FileSystemId',
      includes: 'Includes',
      srcTaskId: 'SrcTaskId',
      taskAction: 'TaskAction',
      transferFileListPath: 'TransferFileListPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      conflictPolicy: 'string',
      createDirIfNotExist: 'boolean',
      dataFlowId: 'string',
      dataType: 'string',
      directory: 'string',
      dryRun: 'boolean',
      dstDirectory: 'string',
      entryList: 'string',
      fileSystemId: 'string',
      includes: 'string',
      srcTaskId: 'string',
      taskAction: 'string',
      transferFileListPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

