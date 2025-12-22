// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFilesetsResponseBodyEntriesEntrieQuota extends $dara.Model {
  /**
   * @remarks
   * The file quantity quota. Valid values:
   * 
   * *   Minimum value: 10000.
   * *   Maximum value: 10000000000.
   * 
   * @example
   * 10000
   */
  fileCountLimit?: number;
  /**
   * @remarks
   * The capacity quota. Unit: bytes.
   * 
   * *   Minimum value: 10737418240 (10 GiB).
   * *   Step size: 1073741824 (1 GiB).
   * 
   * @example
   * 10737418240
   */
  sizeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      fileCountLimit: 'FileCountLimit',
      sizeLimit: 'SizeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileCountLimit: 'number',
      sizeLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilesetsResponseBodyEntriesEntrie extends $dara.Model {
  /**
   * @remarks
   * The time when the fileset was created.
   * 
   * The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2021-09-30T10:08:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection to allow you to release the fileset by using the console or by calling the [DeleteFileset](https://help.aliyun.com/document_detail/2402263.html) operation. Valid values:
   * 
   * *   true: enables release protection.
   * *   false: disables release protection.
   * 
   * > This parameter can protect filesets only against manual releases, but not against automatic releases.
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The fileset description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The usage of the file quantity.
   * 
   * >  Only CPFS for LINGJUN V2.7.0 and later support this parameter.
   * 
   * @example
   * 1024
   */
  fileCountUsage?: number;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   The IDs of CPFS file systems must start with `cpfs-`. Example: cpfs-099394bd928c\\*\\*\\*\\*.
   * *   The IDs of CPFS for LINGJUN file systems must start with `bmcpfs-`. Example: bmcpfs-290w65p03ok64ya\\*\\*\\*\\*.
   * 
   * @example
   * bmcpfs-290w65p03ok64ya****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The fileset path.
   * 
   * @example
   * pathtoroot/fset
   */
  fileSystemPath?: string;
  /**
   * @remarks
   * The fileset ID.
   * 
   * @example
   * fset-1902718ea0ae****
   */
  fsetId?: string;
  /**
   * @remarks
   * The quota information.
   * 
   * >  Only CPFS for Lingjun V2.7.0 and later support this parameter.
   */
  quota?: DescribeFilesetsResponseBodyEntriesEntrieQuota;
  /**
   * @remarks
   * The capacity usage. Unit: bytes.
   * 
   * >  Only CPFS for LINGJUN V2.7.0 and later support this parameter.
   * 
   * @example
   * 1024
   */
  spaceUsage?: number;
  /**
   * @remarks
   * The fileset status. Valid values:
   * 
   * *   CREATING: The fileset is being created.
   * *   CREATED: The fileset has been created and is running properly.
   * *   RELEASING: The fileset is being released.
   * *   RELEASED: The fileset has been deleted.
   * 
   * @example
   * CREATED
   */
  status?: string;
  /**
   * @remarks
   * The time when the fileset was last updated.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2021-09-30T10:08:08Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deletionProtection: 'DeletionProtection',
      description: 'Description',
      fileCountUsage: 'FileCountUsage',
      fileSystemId: 'FileSystemId',
      fileSystemPath: 'FileSystemPath',
      fsetId: 'FsetId',
      quota: 'Quota',
      spaceUsage: 'SpaceUsage',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deletionProtection: 'boolean',
      description: 'string',
      fileCountUsage: 'number',
      fileSystemId: 'string',
      fileSystemPath: 'string',
      fsetId: 'string',
      quota: DescribeFilesetsResponseBodyEntriesEntrieQuota,
      spaceUsage: 'number',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilesetsResponseBodyEntries extends $dara.Model {
  entrie?: DescribeFilesetsResponseBodyEntriesEntrie[];
  static names(): { [key: string]: string } {
    return {
      entrie: 'Entrie',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entrie: { 'type': 'array', 'itemType': DescribeFilesetsResponseBodyEntriesEntrie },
    };
  }

  validate() {
    if(Array.isArray(this.entrie)) {
      $dara.Model.validateArray(this.entrie);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFilesetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The fileset information.
   */
  entries?: DescribeFilesetsResponseBodyEntries;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   The IDs of CPFS file systems must start with `cpfs-`. Example: cpfs-099394bd928c\\*\\*\\*\\*.
   * *   The IDs of CPFS for LINGJUN file systems must start with `bmcpfs-`. Example: bmcpfs-290w65p03ok64ya\\*\\*\\*\\*.
   * 
   * @example
   * bmcpfs-290w65p03ok64ya****
   * 
   * @deprecated
   */
  fileSystemId?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
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
      entries: 'Entries',
      fileSystemId: 'FileSystemId',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entries: DescribeFilesetsResponseBodyEntries,
      fileSystemId: 'string',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.entries && typeof (this.entries as any).validate === 'function') {
      (this.entries as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

