// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBlackListClientsRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 192.168.0.0
   */
  clientIP?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-123458****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the region where the file system resides.
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

