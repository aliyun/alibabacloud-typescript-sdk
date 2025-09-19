// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustomBlockRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address that you want to specify in the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.12.XX.XX
   */
  blockIp?: string;
  /**
   * @remarks
   * The traffic direction that you want to specify in the policy. Valid values:
   * 
   * *   **in**: inbound
   * *   **out**: outbound
   * 
   * This parameter is required.
   * 
   * @example
   * out
   */
  bound?: string;
  /**
   * @remarks
   * The expiration time of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 1940899881000
   */
  expireTime?: number;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The UUIDs of servers.
   * 
   * This parameter is required.
   * 
   * @example
   * 2516fe4f-adb6-45d1-87a7-90ce1213****,30746836-68d0-47f6-8b2d-c93150da****,7c3ac531-077b-46b8-8706-5c8d4e73****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      blockIp: 'BlockIp',
      bound: 'Bound',
      expireTime: 'ExpireTime',
      resourceOwnerId: 'ResourceOwnerId',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockIp: 'string',
      bound: 'string',
      expireTime: 'number',
      resourceOwnerId: 'number',
      uuids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

