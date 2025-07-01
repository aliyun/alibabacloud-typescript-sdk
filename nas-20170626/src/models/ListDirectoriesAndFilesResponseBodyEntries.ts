// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDirectoriesAndFilesResponseBodyEntries extends $dara.Model {
  /**
   * @remarks
   * The time when the file was queried.
   * 
   * The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * This parameter is returned and valid only if the value of the Type parameter is File.
   * 
   * @example
   * 2021-02-01T10:08:08Z
   */
  atime?: string;
  /**
   * @remarks
   * The time when the raw data was modified.
   * 
   * The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * This parameter is returned and valid only if the value of the Type parameter is File.
   * 
   * @example
   * 2021-02-11T10:08:10Z
   */
  ctime?: string;
  /**
   * @remarks
   * The ID of the directory or file.
   * 
   * @example
   * 66
   */
  fileId?: string;
  /**
   * @remarks
   * Indicates whether the directory contains files stored in the Archive storage class.
   * 
   * This parameter is returned and valid only if the value of the Type parameter is Directory.
   * 
   * Valid values:
   * 
   * *   true: The directory contains files stored in the Archive storage class.
   * *   false: The directory does not contain files stored in the Archive storage class.
   * 
   * @example
   * true
   */
  hasArchiveFile?: string;
  /**
   * @remarks
   * Indicates whether the directory contains files stored in the IA storage class.
   * 
   * This parameter is returned and valid only if the value of the Type parameter is Directory.
   * 
   * Valid values:
   * 
   * *   true: The directory contains files stored in the IA storage class.
   * *   false: The directory does not contain files stored in the IA storage class.
   * 
   * @example
   * true
   */
  hasInfrequentAccessFile?: boolean;
  /**
   * @remarks
   * The file or directory inode.
   * 
   * @example
   * 66
   */
  inode?: string;
  /**
   * @remarks
   * The time when the file was modified.
   * 
   * The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * This parameter is returned and valid only if the value of the Type parameter is File.
   * 
   * @example
   * 2021-02-11T10:08:08Z
   */
  mtime?: string;
  /**
   * @remarks
   * The name of the file or directory.
   * 
   * @example
   * file.txt
   */
  name?: string;
  /**
   * @remarks
   * The ID of the portable account. This parameter is returned and valid only if the value of the ProtocolType parameter is SMB and RAM-based access control is enabled.
   * 
   * @example
   * 37862c****
   */
  owner?: string;
  /**
   * @remarks
   * The time when the last data retrieval task was run.
   * 
   * The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * This parameter is returned and valid only if the value of the Type parameter is File.
   * 
   * @example
   * 2021-02-11T10:08:08Z
   */
  retrieveTime?: string;
  /**
   * @remarks
   * The size of the file.
   * 
   * Unit: bytes.
   * 
   * This parameter is returned and valid only if the value of the Type parameter is File.
   * 
   * @example
   * 1024
   */
  size?: number;
  /**
   * @remarks
   * The storage class.
   * 
   * This parameter is returned and valid only if the value of the Type parameter is File.
   * 
   * Valid values:
   * 
   * *   InfrequentAccess: the IA storage class.
   * *   Archive: the Archive storage class.
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  /**
   * @remarks
   * The type of the query result.
   * 
   * Valid values:
   * 
   * *   File
   * *   Directory
   * 
   * @example
   * Directory
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      atime: 'Atime',
      ctime: 'Ctime',
      fileId: 'FileId',
      hasArchiveFile: 'HasArchiveFile',
      hasInfrequentAccessFile: 'HasInfrequentAccessFile',
      inode: 'Inode',
      mtime: 'Mtime',
      name: 'Name',
      owner: 'Owner',
      retrieveTime: 'RetrieveTime',
      size: 'Size',
      storageType: 'StorageType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atime: 'string',
      ctime: 'string',
      fileId: 'string',
      hasArchiveFile: 'string',
      hasInfrequentAccessFile: 'boolean',
      inode: 'string',
      mtime: 'string',
      name: 'string',
      owner: 'string',
      retrieveTime: 'string',
      size: 'number',
      storageType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

