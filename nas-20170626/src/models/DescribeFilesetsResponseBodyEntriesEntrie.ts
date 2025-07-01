// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFilesetsResponseBodyEntriesEntrieQuota } from "./DescribeFilesetsResponseBodyEntriesEntrieQuota";


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
   * Specifies whether to enable deletion protection to allow you to release the fileset by using the console or by calling the [DeleteFileset](https://help.aliyun.com/document_detail/2838077.html) operation. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  This parameter can protect filesets only against manual releases, but not against automatic releases.
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
   * >  CPFS is not supported on the international site.
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

