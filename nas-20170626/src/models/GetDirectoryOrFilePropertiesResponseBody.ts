// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDirectoryOrFilePropertiesResponseBodyEntry extends $dara.Model {
  /**
   * @remarks
   * The time when the file was last accessed.
   * 
   * The time is displayed in the ISO 8601 standard format and is returned in UTC. Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is returned only if Type is set to File.
   * 
   * @example
   * 2021-02-01T10:08:08Z
   */
  ATime?: string;
  /**
   * @remarks
   * The time when the metadata of the file was last modified.
   * 
   * The time is displayed in the ISO 8601 standard format and is returned in UTC. Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is returned only if Type is set to File.
   * 
   * @example
   * 2021-02-11T10:08:10Z
   */
  CTime?: string;
  /**
   * @remarks
   * Indicates whether the directory contains an archive file.
   * 
   * This parameter is returned only if Type is set to Directory.
   * 
   * Valid values:
   * 
   * - true: The directory contains at least one archive file.
   * 
   * - false: The directory does not contain archive files.
   * 
   * @example
   * false
   */
  hasArchiveFile?: boolean;
  /**
   * @remarks
   * Indicates whether the directory contains an Infrequent Access (IA) file.
   * 
   * This parameter is returned only if Type is set to Directory.
   * 
   * Valid values:
   * 
   * - true: The directory contains at least one IA file.
   * 
   * - false: The directory does not contain IA files.
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
   * The time when the file was last modified.
   * 
   * The time is displayed in the ISO 8601 standard format and is returned in UTC. Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is returned only if Type is set to File.
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
  offlineDuration?: number;
  offlineUnchangedDuration?: number;
  /**
   * @remarks
   * The time when the last data retrieval task was run.
   * 
   * The time is displayed in the ISO 8601 standard format and is returned in UTC. Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is returned only if Type is set to File.
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
   * This parameter is returned only if Type is set to File.
   * 
   * @example
   * 1024
   */
  size?: number;
  /**
   * @remarks
   * The storage type of the file.
   * 
   * This parameter is returned only if Type is set to File.
   * 
   * Valid values:
   * 
   * - Standard: General-purpose NAS file systems
   * 
   * - InfrequentAccess: IA storage medium
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  /**
   * @remarks
   * The type of the returned entry.
   * 
   * Valid values:
   * 
   * - File: The entry is a file.
   * 
   * - Directory: The entry is a directory.
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
   * The properties of the directory or file.
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

