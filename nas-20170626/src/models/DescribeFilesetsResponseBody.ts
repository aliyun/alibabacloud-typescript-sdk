// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFilesetsResponseBodyEntries } from "./DescribeFilesetsResponseBodyEntries";


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
   * >  CPFS is not supported on the international site.
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

