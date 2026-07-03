// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyQosPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the stream classification rule.
   * 
   * The description must be 1 to 512 characters in length. It must start with a letter and can contain digits, underscores (_), and hyphens (-).
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block.
   * 
   * The destination CIDR block must be in CIDR format. Example: 192.168.10.0/24.
   * 
   * @example
   * 10.10.20.0/24
   */
  destCidr?: string;
  /**
   * @remarks
   * The destination port range.
   * 
   * Valid values: **-1** or **1** to **65535**.
   * 
   * Examples of how to specify a port range:
   * 
   * - **1/200**: ports 1 through 200.
   * - **80/80**: port 80.
   * - **-1/-1**: all ports.
   * 
   * @example
   * 300/400
   */
  destPortRange?: string;
  /**
   * @remarks
   * The list of application group IDs.
   * 
   * @example
   * 20
   */
  dpiGroupIds?: string[];
  /**
   * @remarks
   * The list of application IDs.
   * 
   * @example
   * 1
   */
  dpiSignatureIds?: string[];
  /**
   * @remarks
   * The time when the stream classification rule expires.
   * 
   * Specify the time in the ISO 8601 standard. The time must be in UTC+8. Format: YYYY-MM-DDThh:mm:ss+0800.
   * 
   * @example
   * 2019-09-14T16:41:33+0800
   */
  endTime?: string;
  /**
   * @remarks
   * The protocol.
   * 
   * For a list of supported protocols, see the information in the console.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The name of the stream classification rule.
   * 
   * The name must be 2 to 100 characters in length. It must start with a letter and can contain digits, underscores (_), and hyphens (-).
   * 
   * @example
   * nametest
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The priority of the throttling rule to which the stream classification rule belongs.
   * 
   * Valid values: 1 to **3**. A smaller value indicates a higher priority.
   * 
   * @example
   * 3
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the QoS policy.
   * 
   * This parameter is required.
   * 
   * @example
   * qos-xitd8690ucu8ro****
   */
  qosId?: string;
  /**
   * @remarks
   * The ID of the stream classification rule in the QoS policy.
   * 
   * This parameter is required.
   * 
   * @example
   * qospy-427m9fo6wkh****
   */
  qosPolicyId?: string;
  /**
   * @remarks
   * The ID of the region where the QoS policy is created.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The source CIDR block.
   * 
   * The source CIDR block must be in CIDR format. Example: 192.168.1.0/24.
   * 
   * @example
   * 10.10.10.0/24
   */
  sourceCidr?: string;
  /**
   * @remarks
   * The source port range.
   * 
   * Valid values: **-1** or **1** to **65535**.
   * 
   * Examples of how to specify a port range:
   * 
   * - **1/200**: ports 1 through 200.
   * - **80/80**: port 80.
   * - **-1/-1**: all ports.
   * 
   * @example
   * 1/200
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * The time when the stream classification rule takes effect.
   * 
   * Specify the time in the ISO 8601 standard. The time must be in UTC+8. Format: YYYY-MM-DDThh:mm:ss+0800.
   * 
   * @example
   * 2019-07-14T16:41:33+0800
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destCidr: 'DestCidr',
      destPortRange: 'DestPortRange',
      dpiGroupIds: 'DpiGroupIds',
      dpiSignatureIds: 'DpiSignatureIds',
      endTime: 'EndTime',
      ipProtocol: 'IpProtocol',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      priority: 'Priority',
      qosId: 'QosId',
      qosPolicyId: 'QosPolicyId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceCidr: 'SourceCidr',
      sourcePortRange: 'SourcePortRange',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destCidr: 'string',
      destPortRange: 'string',
      dpiGroupIds: { 'type': 'array', 'itemType': 'string' },
      dpiSignatureIds: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      ipProtocol: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      priority: 'number',
      qosId: 'string',
      qosPolicyId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceCidr: 'string',
      sourcePortRange: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dpiGroupIds)) {
      $dara.Model.validateArray(this.dpiGroupIds);
    }
    if(Array.isArray(this.dpiSignatureIds)) {
      $dara.Model.validateArray(this.dpiSignatureIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

