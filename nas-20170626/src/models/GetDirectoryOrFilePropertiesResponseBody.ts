// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDirectoryOrFilePropertiesResponseBodyEntry extends $dara.Model {
  /**
   * @remarks
   * The time when the file was queried.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * This parameter is returned only when Type is File.
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
   * This parameter is returned only when Type is File.
   * 
   * @example
   * 2021-02-11T10:08:10Z
   */
  CTime?: string;
  /**
   * @remarks
   * Indicates whether the directory contains Archive storage class files.
   * 
   * This parameter is returned only when Type is Directory.
   * 
   * Valid values:
   * 
   * - true: The directory contains Archive storage class files.
   * - false: The directory does not contain Archive storage class files.
   * 
   * @example
   * false
   */
  hasArchiveFile?: boolean;
  /**
   * @remarks
   * Indicates whether the directory contains IA storage class files.
   * 
   * This parameter is returned only when Type is Directory.
   * 
   * Valid values:
   * 
   * - true: The directory contains IA storage class files.
   * - false: The directory does not contain IA storage class files.
   * 
   * @example
   * true
   */
  hasInfrequentAccessFile?: boolean;
  /**
   * @remarks
   * The inode of the file or directory.
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
   * This parameter is returned only when Type is File.
   * 
   * @example
   * 2021-02-11T10:08:08Z
   */
  MTime?: string;
  /**
   * @remarks
   * The file name or directory name.
   * 
   * @example
   * file.txt
   */
  name?: string;
  /**
   * @remarks
   * The total duration for which the file has been stored as an Archive file. Unit: seconds.
   * 
   * @example
   * 3600
   */
  offlineDuration?: number;
  /**
   * @remarks
   * The total duration for which the file has remained unchanged since it was stored as an Archive file. Unit: seconds.
   * 
   * @example
   * 3600
   */
  offlineUnchangedDuration?: number;
  /**
   * @remarks
   * The time when the most recent data retrieval task was executed.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * This parameter is returned only when Type is File.
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
   * This parameter is returned only when Type is File.
   * 
   * @example
   * 1024
   */
  size?: number;
  /**
   * @remarks
   * The storage type of the returned file.
   * 
   * This parameter is returned only when Type is File.
   * 
   * Valid values:
   * 
   * - Standard: General-purpose NAS storage.
   * - InfrequentAccess: IA storage class.
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  /**
   * @remarks
   * The type of the returned result.
   * 
   * Valid values:
   * 
   * - File: file
   * - Directory: directory
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
      offlineDuration: 'OfflineDuration',
      offlineUnchangedDuration: 'OfflineUnchangedDuration',
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
      offlineDuration: 'number',
      offlineUnchangedDuration: 'number',
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
   * The directory or file information.
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

