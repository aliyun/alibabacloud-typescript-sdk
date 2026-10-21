// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBlackListClientsRequest extends $dara.Model {
  /**
   * @remarks
   * The client IP address.
   * 
   * @example
   * 192.168.0.0
   */
  clientIP?: string;
  /**
   * @remarks
   * The file system ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-123458****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The region ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientIP: 'ClientIP',
      fileSystemId: 'FileSystemId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIP: 'string',
      fileSystemId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

