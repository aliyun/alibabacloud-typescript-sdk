// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrafficMirrorSessionRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, the traffic mirror session is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the traffic mirror session. Valid values:
   * 
   * - **false** (default): does not enable the traffic mirror session.
   * 
   * - **true**: enables the traffic mirror session.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The maximum length of the mirrored original packet, excluding the VXLAN packet length. Default value: **1500**. Valid values: **64** to **8500**. Unit: bytes.
   * - This parameter affects the length of packets received at the traffic mirror destination. For more information, see the mirrored packet length and MTU limits in [Traffic mirroring overview](https://help.aliyun.com/document_detail/207513.html).
   * 
   * - This parameter is available only in specific regions. For more information, see the description of the mirrored packet length parameter in [Create and manage traffic mirrors](https://help.aliyun.com/document_detail/207514.html).
   * 
   * @example
   * 1500
   */
  packetLength?: number;
  /**
   * @remarks
   * The priority of traffic mirror session. Valid values: **1** to **32766**.
   * A smaller value indicates a higher priority. The priorities of traffic mirror sessions created in the same region under the same account must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The region ID of the traffic mirror session. You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query the most recent region list. For information about the regions that support traffic mirroring, see [Traffic mirroring overview](https://help.aliyun.com/document_detail/207513.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hongkong
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the traffic mirroring instance belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags of the resource.
   */
  tag?: CreateTrafficMirrorSessionRequestTag[];
  /**
   * @remarks
   * The instance ID of the traffic mirror filter.
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
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  trafficMirrorSessionName?: string;
  /**
   * @remarks
   * The instance ID of the traffic mirror source. Elastic network interfaces (ENIs) are supported as traffic mirror sources. The default value of **N** is **1**, which indicates that only one traffic mirror source can be added to a traffic mirror session.
   * 
   * This parameter is required.
   * 
   * @example
   * eni-j6c2fp57q8rr47rp****
   */
  trafficMirrorSourceIds?: string[];
  /**
   * @remarks
   * The instance ID of the traffic mirror destination. Elastic network interfaces (ENIs) and private network load balancing instances are supported as traffic mirror destinations.
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
   * - **NetworkInterface**: elastic network interface (ENI).
   * 
   * - **SLB**: private network load balancing instance.
   * 
   * This parameter is required.
   * 
   * @example
   * NetworkInterface
   */
  trafficMirrorTargetType?: string;
  /**
   * @remarks
   * The VXLAN network identifier (VNI) that is used to distinguish mirrored data from different traffic mirror sessions. Valid values: **0** to **16777215**.
   * 
   * You can use the VNI to identify mirrored data from different sessions at the traffic mirror destination. You can specify a custom VNI or use a system-assigned value. To use a system-assigned value, do not specify this parameter. The system randomly allocates the value.
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

