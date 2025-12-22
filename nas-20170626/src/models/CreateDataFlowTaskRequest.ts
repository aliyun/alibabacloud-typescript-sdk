// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataFlowTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The conflict policy for files with the same name. Valid value:
   * 
   * *   SKIP_THE_FILE: skips files with the same name.
   * *   KEEP_LATEST: compares the update time and keeps the latest version.
   * *   OVERWRITE_EXISTING: forcibly overwrites the existing file.
   * 
   * >  This parameter is required for CPFS for Lingjun file systems.
   * 
   * @example
   * SKIP_THE_FILE
   */
  conflictPolicy?: string;
  /**
   * @remarks
   * Specifies whether to automatically create a directory if no directory exists. Valid value:
   * 
   * *   true: automatically creates a directory.
   * *   false (default): does not automatically create a directory.
   * 
   * > 
   * 
   * *   This parameter is required if the TaskAction parameter is set to Import.
   * 
   * *   Only CPFS for Lingjun V2.6.0 and later support this parameter.
   * 
   * @example
   * false
   */
  createDirIfNotExist?: boolean;
  /**
   * @remarks
   * The ID of the dataflow.
   * 
   * This parameter is required.
   * 
   * @example
   * df-194433a5be31****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * The type of data on which operations are performed by the dataflow task.
   * 
   * Valid value:
   * 
   * *   Metadata: the metadata of a file, including the timestamp, ownership, and permission information of the file. If you select Metadata, only the metadata of the file is imported. You can only query the file. When you access the file data, the file is loaded from the source storage as required.
   * *   Data: the data blocks of a file.
   * *   MetaAndData: the metadata and data blocks of the file.
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
   * *   The directory must be 1 to 1,023 characters in length.
   * *   Must be encoded in UTF-8.
   * *   The directory must start and end with a forward slash (/).
   * *   Only one directory can be listed at a time.
   * *   If the TaskAction parameter is set to Export, the directory must be a relative path within the FileSystemPath.
   * *   If the TaskAction parameter is set to Import, the directory must be a relative path within the SourceStoragePath.
   * *   If the TaskAction parameter is set to StreamExport, the directory must be a relative path within the FileSystemPath.
   * *   If the TaskAction parameter is set to StreamImport, the directory must be a relative path within the SourceStoragePath.
   * 
   * >  Only CPFS for Lingjun V2.6.0 and later support StreamImport and StreamExport.
   * 
   * @example
   * /path_in_cpfs/
   */
  directory?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * During the dry run, the system checks whether the request parameters are valid and whether the requested resources are available. During the dry run, no dataflow task is created and no fee is incurred.
   * 
   * Valid value:
   * 
   * *   true: performs a dry run. The system checks the required parameters, request syntax, service limits, and available Apsara File Storage NAS (NAS) resources. Otherwise, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned. No value is returned for the TaskId parameter.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, a dataflow task is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The directory mapped to the dataflow task. Limits:
   * 
   * *   The directory must start and end with a forward slash (/). The directory cannot be /../.
   * *   The directory must be 1 to 1,023 characters in length.
   * *   Must be encoded in UTF-8.
   * *   Only one directory can be listed at a time.
   * *   If the TaskAction parameter is set to Export, the directory must be a relative path within the SourceStoragePath.
   * *   If the TaskAction parameter is set to Import, the directory must be a relative path within the FileSystemPath.
   * *   If the TaskAction parameter is set to StreamExport, the directory must be a relative path within the SourceStoragePath.
   * *   If the TaskAction parameter is set to StreamImport, the directory must be a relative path within the FileSystemPath.
   * 
   * >  Only CPFS for Lingjun V2.6.0 and later support StreamImport and StreamExport.
   * 
   * @example
   * /path_in_cpfs/
   */
  dstDirectory?: string;
  /**
   * @remarks
   * The list of files that are executed by the dataflow task.
   * 
   * Limits:
   * 
   * *   The list must be encoded in UTF-8.
   * *   The total length of the file list cannot exceed 64 KB.
   * *   The file list is in JSON format.
   * *   The path of a single file must be 1 to 1,023 characters in length and must start with a forward slash (/).
   * *   If the TaskAction parameter is set to Import, each element in the list represents an OSS object name.
   * *   If the TaskAction parameter is set to Export, each element in the list represents a CPFS file path.
   * 
   * @example
   * ["/path_in_cpfs/file1", "/path_in_cpfs/file2"]
   */
  entryList?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   The IDs of CPFS file systems must start with `cpfs-`. Example: cpfs-125487\\*\\*\\*\\*.
   * *   The IDs of CPFS for Lingjun file systems must start with `bmcpfs-`. Example: bmcpfs-0015\\*\\*\\*\\*.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-290w65p03ok64ya****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * Filters subdirectories and transfers their contents.
   * 
   * > 
   * 
   * *   This parameter takes effect only when the Directory parameter is specified.
   * 
   * *   The path length of a single folder must be 1 to 1023 characters, start and end with a forward slash (/), and the total length must not exceed 3000 characters.
   * 
   * *   Only CPFS for Lingjun supports this parameter.
   * 
   * @example
   * ["/test/","/test1/"]
   */
  includes?: string;
  /**
   * @remarks
   * If you specify SrcTaskId, you must enter the ID of the dataflow task. The system copies the TaskAction, DataType, and EntryList parameters from the destination dataflow task. You do not need to specify them.
   * 
   * >  Streaming dataflow tasks are not supported.
   * 
   * @example
   * task-27aa8e890f45****
   */
  srcTaskId?: string;
  /**
   * @remarks
   * Select the type of the dataflow task.
   * 
   * Valid value:
   * 
   * *   Import: imports data stored in the source storage to a CPFS file system.
   * *   Export: exports specified data from a CPFS file system to the source storage.
   * *   StreamImport: batch imports the specified data from the source storage to a CPFS file system.
   * *   StreamExport: batch exports specified data from a CPFS file system to the source storage.
   * *   Evict: releases the data blocks of a file in a CPFS file system. After the eviction, only the metadata of the file is retained in the CPFS file system. You can still query the file. However, the data blocks of the file are cleared and do not occupy the storage space in the CPFS file system. When you access the file data, the file is loaded from the source storage as required.
   * *   Inventory: obtains the inventory list managed by a dataflow from the CPFS file system, providing the cache status of inventories in the dataflow.
   * 
   * >  CPFS for Lingjun supports only Import, Export, StreamImport, and StreamExport. Only CPFS for Lingjun V2.6.0 and later support StreamImport and StreamExport.
   * 
   * @example
   * Import
   */
  taskAction?: string;
  /**
   * @remarks
   * Specify the OSS directory and synchronize data based on the content of the CSV file in the OSS directory. Requirements:
   * 
   * *   Must start and end with a forward slash (/).
   * *   Case-sensitive.
   * *   Must be 1 to 1023 characters in length.
   * *   Must be encoded in UTF-8.
   * 
   * > 
   * 
   * *   TransferFileListPath,Directory, and EntryList are mutually exclusive, and only one of the three can be selected.
   * 
   * *   This parameter is the actual path that exists in OSS. The \\*.csv file in the path is stored in OSS.
   * 
   * *   TransferFileListPath only supports Import and Export functions.
   * 
   * *   In the import scenario, the file or directory specified in the CSV file is imported from OSS to CPFS.
   * 
   * *   In the export scenario, the file or directory specified in the CSV file is exported from CPFS to OSS.
   * 
   * *   The CSV file format should include the columns Name and Type. Name refers to the relative path, while Type supports two values: dir and file. If Type is dir, the Name must end with a "/".
   * 
   * *   Only CPFS for Lingjun supports this operation.
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

