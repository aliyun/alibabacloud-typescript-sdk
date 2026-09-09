// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomBlockRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address to block. Traffic from this IP address to the server is blocked.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.xx.xx
   */
  blockIp?: string;
  /**
   * @remarks
   * The direction of traffic to block between the custom IP address and the server.
   * 
   * Valid values:
   * - **in**: inbound
   * - **out**: outbound
   * 
   * This parameter is required.
   * 
   * @example
   * in
   */
  bound?: string;
  /**
   * @remarks
   * The expiration time of the policy. This value is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1859094550000
   */
  expireTime?: number;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The UUIDs of the asset instances. Separate multiple UUIDs with commas (,). You can call DescribeCloudCenterInstances to obtain the UUIDs of asset instances.
   * 
   * This parameter is required.
   * 
   * @example
   * 71c846d6-5c84-4714-acfc-58265bc3****,5013b5e8-1613-43a8-b4de-651db318****,df53f0ad-b3ba-4fe0-9ec7-f42a2ae2****
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

