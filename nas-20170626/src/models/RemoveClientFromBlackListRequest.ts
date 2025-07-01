// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveClientFromBlackListRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address of a client to remove from the blacklist.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.0
   */
  clientIP?: string;
  /**
   * @remarks
   * This parameter ensures the idempotency of each request. A ClientToken is generated for each client. Make sure that each ClientToken is unique between different requests. The parameter can be a maximum of 64 characters in length and contain only ASCII characters.
   * 
   * For more information, see [How to ensure idempotence](https://www.alibabacloud.com/help/doc-detail/25693.htm).
   * 
   * This parameter is required.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-00d91ca404a348****
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
      clientToken: 'ClientToken',
      fileSystemId: 'FileSystemId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIP: 'string',
      clientToken: 'string',
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

