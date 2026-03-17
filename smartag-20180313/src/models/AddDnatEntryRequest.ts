// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDnatEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The public IP address.
   * 
   * >  If the DNAT entry is used to forward packets transmitted over the Internet, the DNAT entry automatically recognizes the current public IP address.
   * 
   * @example
   * 10.10.1.xx
   */
  externalIp?: string;
  /**
   * @remarks
   * The public port.
   * 
   * Valid values: **1 to 65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  externalPort?: string;
  /**
   * @remarks
   * The destination private IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.1
   */
  internalIp?: string;
  /**
   * @remarks
   * The destination private port.
   * 
   * Valid values: **1 to 65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  internalPort?: string;
  /**
   * @remarks
   * The protocol used in DNAT. Valid values:
   * 
   * *   **TCP**: forwards TCP packets.
   * *   **UDP**: The NAT gateway forwards UDP packets.
   * *   **Any**: forwards packets of all protocols.
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  ownerAccount?: string;
  ownerId?: number;
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
   * The ID of the SAG instance.
   * 
   * >  Only SAG instances used to manage SAG devices support DNAT.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-kdhg*******
   */
  sagId?: string;
  /**
   * @remarks
   * The type of the DNAT entry. Valid values:
   * 
   * *   **Intranet**: translates the destination IP address to a specific internal IP address. This is the default value.
   * *   **Internet**: translates the destination IP address to a specific public IP address.
   * 
   * @example
   * Intranet
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sagId: 'SagId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalIp: 'string',
      externalPort: 'string',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sagId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

