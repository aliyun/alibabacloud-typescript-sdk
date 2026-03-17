// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQosPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the traffic classification rule.
   * 
   * The description must be 1 to 512 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block.
   * 
   * Specify the value of this parameter in CIDR notation. Example: 192.168.10.0/24.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.10.20.0/24
   */
  destCidr?: string;
  /**
   * @remarks
   * The destination port range.
   * 
   * Valid values: **1** to **65535** and **-1**.
   * 
   * Examples:
   * 
   * *   **1/200**: a port range from 1 to 200
   * *   **80/80**: port 80
   * *   **-1/-1**: all ports
   * 
   * This parameter is required.
   * 
   * @example
   * 80/80
   */
  destPortRange?: string;
  /**
   * @example
   * 20
   */
  dpiGroupIds?: string[];
  /**
   * @example
   * 1
   */
  dpiSignatureIds?: string[];
  /**
   * @remarks
   * The time when the traffic classification rule expires.
   * 
   * Specify the time in the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ss+0800` format. The time must be in UTC+8.
   * 
   * @example
   * 2022-09-14T16:41:33+0800
   */
  endTime?: string;
  /**
   * @remarks
   * The type of the protocol that applies to the traffic classification rule.
   * 
   * The supported protocols provided in this topic are for reference only. The actual protocols in the console shall prevail.
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The name of the traffic classification rule.
   * 
   * The name must be 2 to 100 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * nametest
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The priority of the traffic throttling policy to which the traffic classification rule belongs.
   * 
   * Valid values: **1 to 3**. A smaller value indicates a higher priority.
   * 
   * This parameter is required.
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
   * The ID of the region to which the QoS policy belongs.
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
   * Specify the value of this parameter in CIDR notation. Example: 192.168.1.0/24.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.10.10.0/24
   */
  sourceCidr?: string;
  /**
   * @remarks
   * The source port range.
   * 
   * Valid values: **1** to **65535** and **-1**.
   * 
   * Examples:
   * 
   * *   **1/200**: a port range from 1 to 200
   * *   **80/80**: port 80
   * *   **-1/-1**: all ports
   * 
   * This parameter is required.
   * 
   * @example
   * 80/80
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * The time when the traffic classification rule takes effect.
   * 
   * Specify the time in the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ss+0800` format. The time must be in UTC+8.
   * 
   * @example
   * 2022-07-14T16:41:33+0800
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

