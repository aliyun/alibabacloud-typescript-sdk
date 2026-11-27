// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableDataInsightRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system. The ID must start with `bmcpfs-`, such as bmcpfs-125487****. You can obtain the ID by purchasing a file system through the NAS console or by calling the [DescribeFileSystems](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-describefilesystems) operation and setting FileSystemType to bmcpfs.
   * 
   * > This feature is supported only by CPFS for Lingjun file systems.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-290w65p03ok64y*****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

