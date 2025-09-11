// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDirectoryOrFilePropertiesResponseBodyEntry extends $dara.Model {
  /**
   * @remarks
   * The time when the file was queried.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * This parameter is returned only if the value of the Type parameter is File.
   * 
   * @example
   * 2021-02-01T10:08:08Z
   */
  ATime?: string;
  /**
   * @remarks
   * The time when the metadata was modified.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * This parameter is returned only if the value of the Type parameter is File.
   * 
   * @example
   * 2021-02-11T10:08:10Z
   */
  CTime?: string;
  /**
   * @remarks
   * Indicates whether the directory contains files stored in the Archive storage class.
   * 
   * This parameter is returned only if the Type parameter is set to Directory.
   * 
   * Valid values:
   * 
   * *   true: The directory contains files stored in the Archive storage class.
   * *   false: The directory does not contain files stored in the Archive storage class.
   * 
   * @example
   * false
   */
  hasArchiveFile?: boolean;
  /**
   * @remarks
   * Indicates whether the directory contains files stored in the IA storage medium.
   * 
   * This parameter is returned only if the value of the Type parameter is Directory.
   * 
   * Valid values:
   * 
   * *   true: The directory contains files stored in the IA storage medium.
   * *   false: The directory does not contain files stored in the IA storage medium.
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
   * 40
   */
  inode?: string;
  /**
   * @remarks
   * The time when the file was modified.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * This parameter is returned only if the value of the Type parameter is File.
   * 
   * @example
   * 2021-02-11T10:08:08Z
   */
  MTime?: string;
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
   * The time when the last data retrieval task was run.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * This parameter is returned only if the value of the Type parameter is File.
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
   * This parameter is returned only if the value of the Type parameter is File.
   * 
   * @example
   * 1024
   */
  size?: number;
  /**
   * @remarks
   * The storage class of the file.
   * 
   * This parameter is returned only if the value of the Type parameter is File.
   * 
   * Valid values:
   * 
   * *   standard: General-purpose NAS file system
   * *   InfrequentAccess: the IA storage class.
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
   * File
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ATime: 'ATime',
      CTime: 'CTime',
      hasArchiveFile: 'HasArchiveFile',
      hasInfrequentAccessFile: 'HasInfrequentAccessFile',
      inode: 'Inode',
      MTime: 'MTime',
      name: 'Name',
      retrieveTime: 'RetrieveTime',
      size: 'Size',
      storageType: 'StorageType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ATime: 'string',
      CTime: 'string',
      hasArchiveFile: 'boolean',
      hasInfrequentAccessFile: 'boolean',
      inode: 'string',
      MTime: 'string',
      name: 'string',
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

export class GetDirectoryOrFilePropertiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the file or directory.
   */
  entry?: GetDirectoryOrFilePropertiesResponseBodyEntry;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF518948****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entry: 'Entry',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entry: GetDirectoryOrFilePropertiesResponseBodyEntry,
      requestId: 'string',
    };
  }

  validate() {
    if(this.entry && typeof (this.entry as any).validate === 'function') {
      (this.entry as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

