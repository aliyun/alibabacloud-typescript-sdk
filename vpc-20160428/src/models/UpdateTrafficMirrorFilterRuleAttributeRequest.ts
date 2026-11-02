// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTrafficMirrorFilterRuleAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, and you must ensure that the value is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The destination CIDR block of the network traffic for the inbound or outbound rule to be updated.
   * 
   * @example
   * 10.0.0.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The destination port range of the network traffic for the inbound or outbound rule to be updated.
   * 
   * > If **Protocol** is set to **ICMP**, you cannot update the port range.
   * 
   * @example
   * -1/-1
   */
  destinationPortRange?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * - **true**: prechecks the request without updating the configuration of the inbound or outbound rule. The system checks whether the required parameters are specified, the request format is valid, and the service limits are met. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): sends the request. If the request passes the precheck, a 2xx HTTP status code is returned and the configuration of the inbound or outbound rule is updated.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The priority of the inbound or outbound rule to be updated. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The protocol type of the network traffic to be mirrored by the inbound or outbound rule to be updated. Valid values:
   * 
   * - **ALL**: all protocols.
   * 
   * - **ICMP**: Internet Control Message Protocol.
   * 
   * - **TCP**: Transmission Control Protocol.
   * 
   * - **UDP**: User Datagram Protocol.
   * 
   * @example
   * ICMP
   */
  protocol?: string;
  /**
   * @remarks
   * The region ID of the traffic mirror.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list. For more information about the regions that support traffic mirroring, see [Traffic mirroring overview](https://help.aliyun.com/document_detail/207513.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hongkong
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The collection policy of the inbound or outbound rule to be updated. Valid values:
   * 
   * - **accept**: collects network traffic.
   * 
   * - **drop**: does not collect network traffic.
   * 
   * @example
   * accept
   */
  ruleAction?: string;
  /**
   * @remarks
   * The source CIDR block of the network traffic for the inbound or outbound rule to be updated.
   * 
   * @example
   * 0.0.0.0/0
   */
  sourceCidrBlock?: string;
  /**
   * @remarks
   * The source port range of the network traffic for the inbound or outbound rule to be updated.
   * > If **Protocol** is set to **ICMP**, you cannot update the port range.
   * 
   * @example
   * 22/40
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * The instance ID of the inbound or outbound traffic mirroring rule.
   * 
   * This parameter is required.
   * 
   * @example
   * tmr-j6c89rzmtd3hhdugq****
   */
  trafficMirrorFilterRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      destinationCidrBlock: 'DestinationCidrBlock',
      destinationPortRange: 'DestinationPortRange',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      priority: 'Priority',
      protocol: 'Protocol',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      ruleAction: 'RuleAction',
      sourceCidrBlock: 'SourceCidrBlock',
      sourcePortRange: 'SourcePortRange',
      trafficMirrorFilterRuleId: 'TrafficMirrorFilterRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      destinationCidrBlock: 'string',
      destinationPortRange: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      priority: 'number',
      protocol: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      ruleAction: 'string',
      sourceCidrBlock: 'string',
      sourcePortRange: 'string',
      trafficMirrorFilterRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

