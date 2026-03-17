// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySmartAccessGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR blocks of terminals in the private network. Make sure that the CIDR blocks do not overlap with each other.
   * 
   * If the LAN ports of the terminals use dynamic routing, the IP addresses within the first private CIDR block are allocated to the terminals that have Dynamic Host Configuration Protocol (DHCP) enabled.
   * 
   * @example
   * 172.16.0.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The description of the SAG instance.
   * 
   * The description must be 2 to 256 characters in length. The description must start with a letter but cannot start with `http://` or `https://`.
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to audit the network connection logs of the SAS app instance.
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  enableSoftwareConnectionAudit?: boolean;
  /**
   * @remarks
   * The name of the SAG instance.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * SAG
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The location where the SAG instance is deployed.
   */
  position?: string;
  /**
   * @remarks
   * The ID of the region where the SAG instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The policy that is used to advertise routes to Alibaba Cloud. Valid values:
   * 
   * *   **static**: static routing
   * *   **dynamic**: dynamic routing
   * 
   * @example
   * static
   */
  routingStrategy?: string;
  /**
   * @remarks
   * The time during which the disconnected SAG instance remains locked. Valid values: an integer that is greater than or equal to 0.
   * 
   * Unit: seconds.
   * 
   * @example
   * 3
   */
  securityLockThreshold?: number;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-0ovhf732a9j0******
   */
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      description: 'Description',
      enableSoftwareConnectionAudit: 'EnableSoftwareConnectionAudit',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      position: 'Position',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routingStrategy: 'RoutingStrategy',
      securityLockThreshold: 'SecurityLockThreshold',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      description: 'string',
      enableSoftwareConnectionAudit: 'boolean',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      position: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routingStrategy: 'string',
      securityLockThreshold: 'number',
      smartAGId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

