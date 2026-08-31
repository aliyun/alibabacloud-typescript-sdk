// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableDataInsightRequest extends $dara.Model {
  /**
   * @remarks
   * The file system ID.
   * 
   * - CPFS for Lingjun: The value must start with `bmcpfs-`, such as bmcpfs-125487\\*\\*\\*\\*.
   * > Only CPFS for Lingjun file systems are supported.
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

