// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySagGlobalRouteProtocolRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the SAG instance.
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
   * The routing protocol. Valid values:
   * 
   * *   **STATIC**: static routing protocol
   * *   **OSPF**: Open Shortest Path First protocol (OSPF)
   * *   **BGP**: Border Gateway Protocol (BGP)
   * 
   * This parameter is required.
   * 
   * @example
   * OSPF
   */
  routeProtocol?: string;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-whfn****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The serial number of the SAG device that is associated with the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag32a30****
   */
  smartAGSn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeProtocol: 'RouteProtocol',
      smartAGId: 'SmartAGId',
      smartAGSn: 'SmartAGSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeProtocol: 'string',
      smartAGId: 'string',
      smartAGSn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

