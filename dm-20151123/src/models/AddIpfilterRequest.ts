// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddIpfilterRequest extends $dara.Model {
  /**
   * @remarks
   * IP Address/IP Range/IP Segment
   * 
   * This parameter is required.
   * 
   * @example
   * xxx.xxx.xxx.xxx
   * xxx.xxx.xxx.xxx-xxx.xxx.xxx.xxx
   * xxx.xxx.xxx.xxx/xxx
   */
  ipAddress?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

