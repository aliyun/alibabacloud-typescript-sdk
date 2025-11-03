// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFlowLogAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The new sampling interval of the flow log. Unit: minutes. Valid values: **1**, **5**, and **10**.
   * 
   * @example
   * 1
   */
  aggregationInterval?: number;
  /**
   * @remarks
   * The new description of the flow log.
   * 
   * The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is my Flowlog.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the flow log.
   * 
   * This parameter is required.
   * 
   * @example
   * fl-m5e8vhz2t21sel1nq****
   */
  flowLogId?: string;
  /**
   * @remarks
   * The new name of the flow log.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * myFlowlog
   */
  flowLogName?: string;
  /**
   * @remarks
   * The version of the IP address. Valid values:
   * 
   * *   **IPV4**: the IPv4 address.
   * *   **DualStack**: includes IPv4 and IPv6 address
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the flow log is created.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      aggregationInterval: 'AggregationInterval',
      description: 'Description',
      flowLogId: 'FlowLogId',
      flowLogName: 'FlowLogName',
      ipVersion: 'IpVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregationInterval: 'number',
      description: 'string',
      flowLogId: 'string',
      flowLogName: 'string',
      ipVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
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

