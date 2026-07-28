// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTrafficMirrorFilterRuleAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** as the **ClientToken**. The **RequestId** may be different for each request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The destination CIDR block of the network traffic for the inbound or outbound rule to be modified.
   * 
   * @example
   * 10.0.0.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The destination port range of the network traffic for the inbound or outbound rule to be modified.
   * 
   * > If **Protocol** is set to **ICMP**, the port range cannot be modified.
   * 
   * @example
   * -1/-1
   */
  destinationPortRange?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * - **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the configuration of the inbound or outbound rule is modified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The priority of the inbound or outbound rule to be modified. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The Protocol Type of the network traffic to be mirrored by the inbound or outbound rule. Valid values:
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
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query the most recent region list. For more information about regions that support traffic mirroring, see [Traffic mirroring overview](https://help.aliyun.com/document_detail/207513.html).
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
   * The collection policy of the inbound or outbound rule to be modified. Valid values:
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
   * The source CIDR block of the network traffic for the inbound or outbound rule to be modified.
   * 
   * @example
   * 0.0.0.0/0
   */
  sourceCidrBlock?: string;
  /**
   * @remarks
   * The source port range of the network traffic for the inbound or outbound rule to be modified.
   * > If **Protocol** is set to **ICMP**, the port range cannot be modified.
   * 
   * @example
   * 22/40
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * The instance ID of the inbound or outbound rule of the traffic mirroring filter.
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

