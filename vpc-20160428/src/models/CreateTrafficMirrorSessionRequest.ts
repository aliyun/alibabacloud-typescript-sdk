// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrafficMirrorSessionRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify at most 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficMirrorSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that the value is unique among all requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, the system uses **RequestId** as **ClientToken**. **RequestId** might be different for each API request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true**: performs a dry run. The system checks the required parameters, request format, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and sends the request. If the request passes the dry run, the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the traffic mirror session. Valid values:
   * 
   * *   **false** (default): does not enable the traffic mirror session.
   * *   **true**: enables the traffic mirror session.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The maximum transmission unit.
   * 
   * Valid values: **64 to 9600**. Default value: **1500**.
   * 
   * @example
   * 1500
   */
  packetLength?: number;
  /**
   * @remarks
   * The priority of the traffic mirror session. Valid values: **1** to **32766**.
   * 
   * A smaller value indicates a higher priority. You cannot specify identical priorities for traffic mirror sessions that are created in the same region by using the same account.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the region to which the traffic mirror session belongs. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list. For more information about regions that support traffic mirror, see [Overview of traffic mirror](https://help.aliyun.com/document_detail/207513.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hongkong
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the mirrored traffic belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag of the resource.
   */
  tag?: CreateTrafficMirrorSessionRequestTag[];
  /**
   * @remarks
   * The ID of the filter.
   * 
   * This parameter is required.
   * 
   * @example
   * tmf-j6cmls82xnc86vtpe****
   */
  trafficMirrorFilterId?: string;
  /**
   * @remarks
   * The description of the traffic mirror session.
   * 
   * The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is a trafficmirrorsession.
   */
  trafficMirrorSessionDescription?: string;
  /**
   * @remarks
   * The name of the traffic mirror session.
   * 
   * The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  trafficMirrorSessionName?: string;
  /**
   * @remarks
   * The ID of the traffic mirror source. You can specify only an elastic network interface (ENI) as the traffic mirror source. The default value of **N** is **1**, which indicates that you can add only one traffic mirror source to a traffic mirror session.
   * 
   * This parameter is required.
   * 
   * @example
   * eni-j6c2fp57q8rr47rp****
   */
  trafficMirrorSourceIds?: string[];
  /**
   * @remarks
   * The ID of the traffic mirror destination. You can specify only an elastic network interface (ENI) or a Server Load Balancer (SLB) instance as a traffic mirror destination.
   * 
   * This parameter is required.
   * 
   * @example
   * eni-j6c8znm5l1yt4sox****
   */
  trafficMirrorTargetId?: string;
  /**
   * @remarks
   * The type of the traffic mirror destination. Valid values:
   * 
   * *   **NetworkInterface**: an ENI
   * *   **SLB**: an SLB instance
   * 
   * This parameter is required.
   * 
   * @example
   * NetworkInterface
   */
  trafficMirrorTargetType?: string;
  /**
   * @remarks
   * The VXLAN network identifier (VNI). Valid values: **0** to **16777215**.
   * 
   * You can use VNIs to identify mirrored traffic from different sessions at the traffic mirror destination. You can specify a custom VNI or use a random VNI allocated by the system. If you want the system to randomly allocate a VNI, do not enter a value.
   * 
   * @example
   * 1
   */
  virtualNetworkId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      enabled: 'Enabled',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      packetLength: 'PacketLength',
      priority: 'Priority',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      trafficMirrorFilterId: 'TrafficMirrorFilterId',
      trafficMirrorSessionDescription: 'TrafficMirrorSessionDescription',
      trafficMirrorSessionName: 'TrafficMirrorSessionName',
      trafficMirrorSourceIds: 'TrafficMirrorSourceIds',
      trafficMirrorTargetId: 'TrafficMirrorTargetId',
      trafficMirrorTargetType: 'TrafficMirrorTargetType',
      virtualNetworkId: 'VirtualNetworkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      enabled: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      packetLength: 'number',
      priority: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateTrafficMirrorSessionRequestTag },
      trafficMirrorFilterId: 'string',
      trafficMirrorSessionDescription: 'string',
      trafficMirrorSessionName: 'string',
      trafficMirrorSourceIds: { 'type': 'array', 'itemType': 'string' },
      trafficMirrorTargetId: 'string',
      trafficMirrorTargetType: 'string',
      virtualNetworkId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.trafficMirrorSourceIds)) {
      $dara.Model.validateArray(this.trafficMirrorSourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

