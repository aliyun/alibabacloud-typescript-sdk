// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTrafficMirrorFilterRuleAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, the system uses **RequestId** as **ClientToken**. **RequestId** may be different for each API request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The new destination CIDR block of the inbound or outbound traffic.
   * 
   * @example
   * 10.0.0.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The new destination port range of the inbound or outbound traffic.
   * 
   * >  If you set **Protocol** to **ICMP**, you cannot change the port range.
   * 
   * @example
   * -1/-1
   */
  destinationPortRange?: string;
  /**
   * @remarks
   * Specifies whether to check the request without performing the operation. Valid values:
   * 
   * *   **true**: only checks the API request. The configuration of the inbound or outbound rule is not modified. The system checks the required parameters, request syntax, and limits. If the request fails to pass the check, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false**: sends the request. This is the default value. If the request passes the check, a 2xx HTTP status code is returned and the configuration of the inbound or outbound rule is modified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The new priority of the inbound or outbound rule. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The new protocol that is used by the traffic to be mirrored by the inbound or outbound rule. Valid values:
   * 
   * *   **ALL**: all protocols
   * *   **ICMP**: Internet Control Message Protocol (ICMP)
   * *   **TCP**: TCP
   * *   **UDP**: User Datagram Protocol (UDP)
   * 
   * @example
   * ICMP
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the region to which the mirrored traffic belongs.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list. For more information about regions that support traffic mirroring, see [Overview of traffic mirroring](https://help.aliyun.com/document_detail/207513.html).
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
   * The new action of the inbound or outbound rule. Valid values:
   * 
   * *   **accept**: accepts network traffic.
   * *   **drop**: drops network traffic.
   * 
   * @example
   * accept
   */
  ruleAction?: string;
  /**
   * @remarks
   * The new source CIDR block of the inbound or outbound traffic.
   * 
   * @example
   * 0.0.0.0/0
   */
  sourceCidrBlock?: string;
  /**
   * @remarks
   * The new source port range of the inbound or outbound traffic.
   * 
   * >  If you set **Protocol** to **ICMP**, you cannot change the port range.
   * 
   * @example
   * 22/40
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * The ID of the inbound or outbound rule.
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

