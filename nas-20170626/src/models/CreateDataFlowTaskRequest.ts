// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataFlowTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, and you must make sure that the value is unique among different requests.
   * 
   * The client token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId of each API request may be different.
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
   * - SKIP_THE_FILE: skips files with the same name.
   * - KEEP_LATEST: compares the update time and retains the latest version.
   * - OVERWRITE_EXISTING: forcibly overwrites files with the same name.
   * > This parameter is required when the file system type is CPFS for Lingjun.
   * 
   * @example
   * SKIP_THE_FILE
   */
  conflictPolicy?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic creation of the folder if the folder does not exist.
   * Valid values:
   * 
   * - true: Enables automatic creation of the folder.
   * - false: Disables automatic creation of the folder.
   * Default value: false.
   * 
   * > - This parameter takes effect when TaskAction is set to Import.
   * > - This parameter is supported only in CPFS for Lingjun 2.6.0 and later.
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
   * The type of data operated by the data flow task.
   * 
   * Valid values:
   * 
   * - Metadata: the metadata of files, including attributes such as timestamp, ownership, and permission. If you select Metadata, only the metadata of the files is imported. You can only view the files. When you access the file data, the data is loaded on demand from the source storage.
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
   * - You can specify only one directory at a time.
   * - When TaskAction is set to Export, the directory must be a relative path within FileSystemPath.
   * - When TaskAction is set to Import, the directory must be a relative path within SourceStoragePath.
   * - When TaskAction is set to StreamExport, the directory must be a relative path within FileSystemPath.
   * - When TaskAction is set to StreamImport, the directory must be a relative path within SourceStoragePath.
   * > StreamImport and StreamExport are supported only in CPFS for Lingjun 2.6.0 and later.
   * The Directory, EntryList, and TransferFileListPath parameters are mutually exclusive. You can specify only one of them.
   * 
   * @example
   * /path_in_cpfs/
   */
  directory?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the creation request.
   * 
   * A dry run helps you check parameter validity and verify inventory. It does not actually create the instance or incur fees.
   * 
   * Valid values:
   * 
   * - true: Sends a check request and does not create the instance. The system checks whether required parameters are specified, the request format, business limits, and NAS inventory. If the check fails, the corresponding error is returned. If the check succeeds, the HTTP status code 200 is returned, but TaskId is empty.
   * - false: Sends a normal request and directly creates the instance after the check succeeds.
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The destination directory mapped by the data flow task.
   * Limits:
   *  - The value must start and end with a forward slash (/). The value cannot contain /../.
   *  - The value must be 1 to 1,023 characters in length.
   *  - The value must be encoded in UTF-8.
   *  - You can specify only one directory at a time.
   *  - When TaskAction is set to Export, the directory must be a relative path within SourceStoragePath.
   *  - When TaskAction is set to Import, the directory must be a relative path within FileSystemPath.
   *  - When TaskAction is set to StreamExport, the directory must be a relative path within SourceStoragePath.
   *  - When TaskAction is set to StreamImport, the directory must be a relative path within FileSystemPath.
   * > StreamImport and StreamExport are supported only in CPFS for Lingjun 2.6.0 and later.
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
   * - The value must be encoded in UTF-8.
   * - The total length of the file list must be less than 64 KB.
   * - The file list must be in JSON format.
   * - The path of a single file must be 1 to 1,023 characters in length and must start with a forward slash (/).
   * - When TaskAction is set to Import, each element in the list represents an OSS object name.
   * - When TaskAction is set to Export, each element in the list represents a CPFS file path.
   * > The Directory, EntryList, and TransferFileListPath parameters are mutually exclusive. You can specify only one of them.
   * 
   * @example
   * ["/path_in_cpfs/file1", "/path_in_cpfs/file2"]
   */
  entryList?: string;
  /**
   * @remarks
   * The ID of the file system.
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
   * Filters the directories under the specified directory and transfers the content of the folders within the filtered directories.
   * 
   * > - This parameter takes effect only when the Directory parameter is specified.
   * > - The path of a single folder must be 1 to 1,023 characters in length, must start and end with a forward slash (/), and cannot exceed 3,000 characters in total length.
   * > - Only CPFS for Lingjun supports this feature.
   * 
   * @example
   * ["/test/","/test1/"]
   */
  includes?: string;
  /**
   * @remarks
   * The ID of the source data flow task. If you specify SrcTaskId, you must enter a data flow task ID. The system copies the TaskAction, DataType, and EntryList parameters from the specified data flow task. You do not need to specify these parameters separately.
   * > Streaming data flow tasks are not supported.
   * 
   * @example
   * task-29ee8e890f45****
   */
  srcTaskId?: string;
  /**
   * @remarks
   * The type of the data stream node.
   * 
   * Valid values:
   * 
   * - Import: performs data import of specified data from the source storage to CPFS.
   * - Export: exports specified data from CPFS to the source storage.
   * - StreamImport: imports specified data in batches from the source storage to CPFS.
   * - StreamExport: performs batch export of specified data from CPFS to the source storage.
   * - Evict: releases the data blocks of files in CPFS. After the release, only the metadata of the files is retained in CPFS. You can still query the files, but the data blocks are purged and do not occupy storage capacity in CPFS. When you access the file data, the data is loaded on demand from the source storage.
   * - Inventory: obtains the checklist of files managed by data streams in CPFS. This provides the cache status of the files in the data streams.
   * > CPFS for Lingjun supports only Import, Export, StreamImport, and StreamExport. StreamImport and StreamExport are supported only in CPFS for Lingjun 2.6.0 and later.
   * 
   * @example
   * Import
   */
  taskAction?: string;
  /**
   * @remarks
   * The OSS directory. Data is synchronized based on the content of the CSV file in the OSS directory. Limits:
   * - The value must start and end with a forward slash (/).
   * 
   * - The value is case-sensitive.
   * 
   * - The value must be 1 to 1,023 characters in length.
   * 
   * - The value must be encoded in UTF-8.
   * 
   * 
   * > - The TransferFileListPath, Directory, and EntryList parameters are mutually exclusive. You can specify only one of them.
   * > - This parameter must be an actual path in OSS. The *.csv files under the path are stored in OSS.
   * > - TransferFileListPath supports only the Import and Export operations.
   * > - In the Import scenario, the files or directories specified in the CSV file are imported from OSS to CPFS.
   * > - In the Export scenario, the files or directories specified in the CSV file are exported from CPFS to OSS.
   * > - The CSV file must contain the Name and Type columns. Name is a relative path. Type supports two values: dir and file. If Type is set to dir, the Name suffix must end with a forward slash (/).
   * > - Only CPFS for Lingjun supports this feature.
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

