// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySmartAccessGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The private CIDR block used by clients at the on-premises site for communication. Make sure that private CIDR blocks do not conflict with each other. 
   * 
   * If the LAN port of the Smart Access Gateway device is configured in dynamic mode, the IP addresses used by on-premises clients with DHCP enabled are allocated from the first private CIDR block that you specify.
   * 
   * @example
   * 172.16.0.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The description of the Smart Access Gateway instance. 
   * 
   * The description must be 2 to 256 characters in length, and must start with a letter or a Chinese character. It cannot start with `http://` or `https://`.
   * 
   * @example
   * SAG description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable connection log auditing for the SAG app. Valid values:
   * 
   * - **true**: enables connection log auditing for the SAG app.
   * 
   * - **false**: disables connection log auditing for the SAG app.
   * 
   * @example
   * true
   */
  enableSoftwareConnectionAudit?: boolean;
  /**
   * @remarks
   * The name of the Smart Access Gateway instance. 
   * 
   * The name must be 2 to 128 characters in length, and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * SAG
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The location where the Smart Access Gateway instance is deployed.
   * 
   * @example
   * [ { "adcode":"", "label":"Hangzhou, Zhejiang xx zone xx Road xx number", "value":"B0FFGxxxx", "center":"120.190xxxx, 30.182xxxx", "_new":"true" } ]
   */
  position?: string;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway instance.
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
   * The route synchronization mode for the on-premises network. Valid values:
   * 
   * - **static**: static routing.
   * 
   * - **dynamic**: dynamic routing.
   * 
   * @example
   * static
   */
  routingStrategy?: string;
  /**
   * @remarks
   * The threshold configured by the user for the offline lock feature. The value must be greater than or equal to 0.
   * 
   * Unit: seconds.
   * 
   * @example
   * 3
   */
  securityLockThreshold?: number;
  /**
   * @remarks
   * The instance ID of the Smart Access Gateway.
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

