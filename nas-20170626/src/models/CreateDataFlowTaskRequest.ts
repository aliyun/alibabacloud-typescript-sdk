// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataFlowTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may be different for each API request.
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
   * - KEEP_LATEST: Compares the update time and keeps the latest version.
   * - OVERWRITE_EXISTING: Forcibly overwrites files with the same name.
   * > This parameter is required when the file system type is CPFS for Lingjun.
   * 
   * @example
   * SKIP_THE_FILE
   */
  conflictPolicy?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic creation of the folder if it does not exist.
   * Valid values:
   * 
   * - true: Automatic creation of the folder is enabled.
   * - false (default): Automatic creation of the folder is not enabled.
   * 
   * > - This parameter takes effect when TaskAction is set to Import.
   * > - Only CPFS for Lingjun 2.6.0 and later support this feature.
   * 
   * @example
   * false
   */
  createDirIfNotExist?: boolean;
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
   * The type of data on which the data flow task operates.
   * 
   * Valid values:
   * 
   * - Metadata: the metadata of files, including attributes such as timestamp, ownership, and permission. If you select Metadata, only the metadata of files is imported. You can see the file, but when you access the file data, the data is loaded from the source storage on demand.
   * - Data: the data blocks of files.
   * - MetaAndData: the metadata and data blocks of files.
   * > When TaskAction is set to Evict, the DataType parameter is required.
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
   * - The value must be 1 to 1,023 characters in length.
   * - The value must be encoded in UTF-8.
   * - The value must start and end with a forward slash (/).
   * - Only one directory can be specified at a time.
   * - When TaskAction is set to Export, this directory must be a relative path within FileSystemPath.
   * - When TaskAction is set to Import, this directory must be a relative path within SourceStoragePath.
   * - When TaskAction is set to StreamExport, this directory must be a relative path within FileSystemPath.
   * - When TaskAction is set to StreamImport, this directory must be a relative path within SourceStoragePath.
   * > StreamImport and StreamExport are supported only by CPFS for Lingjun 2.6.0 and later.
   * Directory, EntryList, and TransferFileListPath are mutually exclusive parameters. You can specify only one of them.
   * 
   * @example
   * /path_in_cpfs/
   */
  directory?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this request.
   * 
   * A dry run checks parameter validity, verifies inventory, and performs other checks without actually creating the instance or incurring fees.
   * 
   * Valid values:
   * 
   * - true: sends a dry run request without creating the instance. The check items include whether required parameters are specified, the request format, business limits, and File Storage NAS inventory. If the check fails, the corresponding error is returned. If the check succeeds, HTTP status code 200 is returned, but TaskId is empty.
   * - false (default): sends a normal request. After the check succeeds, the instance is directly created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The target directory to which the data flow task is mapped.
   * Limits:
   *  - The value must start and end with a forward slash (/). /../ is not supported.
   *  - The value must be 1 to 1,023 characters in length.
   *  - The value must be encoded in UTF-8.
   *  - Only one directory can be specified at a time.
   *  - When TaskAction is set to Export, this directory must be a relative path within SourceStoragePath.
   *  - When TaskAction is set to Import, this directory must be a relative path within FileSystemPath.
   *  - When TaskAction is set to StreamExport, this directory must be a relative path within SourceStoragePath.
   *  - When TaskAction is set to StreamImport, this directory must be a relative path within FileSystemPath.
   * > StreamImport and StreamExport are supported only by CPFS for Lingjun 2.6.0 and later.
   * 
   * @example
   * /path_in_cpfs/
   */
  dstDirectory?: string;
  /**
   * @remarks
   * The list of files on which the data flow task is executed.
   * 
   * Limits:
   * 
   * - The value must be encoded in UTF-8.
   * - The total length of the file list must be less than 64 KB.
   * - The file list must be in JSON format.
   * - The path of each file must be 1 to 1,023 characters in length and must start with a forward slash (/).
   * - When TaskAction is set to Import, each element in the list represents an OSS object name.
   * - When TaskAction is set to Export, each element in the list represents a CPFS file path.
   * > Directory, EntryList, and TransferFileListPath are mutually exclusive parameters. You can specify only one of them.
   * 
   * @example
   * ["/path_in_cpfs/file1", "/path_in_cpfs/file2"]
   */
  entryList?: string;
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
   * Filters directories under the specified directory and transfers the content of the included folders.
   * 
   * > - This parameter takes effect only when the Directory parameter is specified.
   * > - The path of each folder must be 1 to 1,023 characters in length and must start and end with a forward slash (/). The total length cannot exceed 3,000 characters.
   * > - Only CPFS for Lingjun supports this feature.
   * 
   * @example
   * ["/test/","/test1/"]
   */
  includes?: string;
  /**
   * @remarks
   * If you specify SrcTaskId, enter the data flow task ID. The system copies the TaskAction, DataType, and EntryList parameter information from the specified data flow task. You do not need to specify these parameters separately.
   * > Data flow streaming tasks are not supported.
   * 
   * @example
   * task-29ee8e890f45****
   */
  srcTaskId?: string;
  /**
   * @remarks
   * The data flow node type.
   * 
   * Valid values:
   * 
   * - Import: data import from the source storage to CPFS.
   * - Export: exports specified data from CPFS to the source storage.
   * - StreamImport: batch data import from the source storage to CPFS.
   * - StreamExport: batch exports specified data from CPFS to the source storage.
   * - Evict: releases data blocks of files on CPFS. After the release, only metadata is retained on CPFS. You can still query the file, but the data blocks are purged and do not occupy storage capacity on CPFS. When you access the file data, the data is loaded from the source storage on demand.
   * - Inventory: obtains the file checklist managed by the data stream on CPFS. This provides the cache status of files in the data stream.
   * > CPFS for Lingjun supports only Import, Export, StreamImport, and StreamExport. StreamImport and StreamExport are supported only by CPFS for Lingjun 2.6.0 and later.
   * 
   * @example
   * Import
   */
  taskAction?: string;
  /**
   * @remarks
   * The OSS directory. Data is synchronized based on the content of CSV files in the OSS directory. Limits:
   * - The value must start and end with a forward slash (/).
   * 
   * - The value is case-sensitive.
   * 
   * - The value must be 1 to 1,023 characters in length.
   * 
   * - The value must be encoded in UTF-8.
   * 
   * 
   * >- TransferFileListPath, Directory, and EntryList are mutually exclusive parameters. You can specify only one of them.
   * >- This parameter specifies an existing path in OSS. The \\*.csv files in the path are stored in OSS.
   * > - TransferFileListPath supports only Import and Export.
   * > - For Import, the files or directories specified in the CSV files are imported from OSS to CPFS.
   * > - For Export, the files or directories specified in the CSV files are exported from CPFS to OSS.
   * > - The CSV file must contain the Name and Type columns. Name is a relative path. Type supports two values: dir and file. If Type is dir, the Name value must end with a forward slash (/).
   * >- Only CPFS for Lingjun supports this feature.
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

