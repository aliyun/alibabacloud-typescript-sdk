// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDnatEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The external public IP address.
   * > If the DNAT type is Internet, the system automatically identifies the current public IP address. You do not need to specify this parameter.
   * 
   * @example
   * 10.10.1.xx
   */
  externalIp?: string;
  /**
   * @remarks
   * The public port.
   * Valid values: **1-65535**.
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
   * The destination private port number.
   * Valid values: **1-65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  internalPort?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * - **TCP**: forwards TCP packets.
   * - **UDP**: forwards UDP packets.
   * - **Any**: forwards packets of all protocols.
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
   * The ID of the Smart Access Gateway instance.
   * 
   * > Currently, only hardware instances are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-kdhg*******
   */
  sagId?: string;
  /**
   * @remarks
   * The DNAT type. Valid values:
   * - **Intranet**: private network DNAT. This is the default value.
   * - **Internet**: public network DNAT.
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

