// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmartAccessGatewayBgpRouteRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query only the SAG instances that belong to another Alibaba Cloud account. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * @example
   * false
   */
  crossAccount?: boolean;
  /**
   * @remarks
   * The hold time. Unit: seconds.
   * 
   * Valid values: **3** to **65535**.
   * 
   * > When the SAG device establishes a peering connection with a peer device, the hold time of both devices must be the same. If the SAG device does not receive a keepalive or update message from the peer device within the hold time, the connection between the BGP peers is closed.
   * 
   * This parameter is required.
   * 
   * @example
   * 9
   */
  holdTime?: number;
  /**
   * @remarks
   * The time interval at which keep-alive packets are sent. Unit: seconds.
   * 
   * Valid values: **0** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  keepAlive?: number;
  /**
   * @remarks
   * The autonomous system number (ASN) of the SAG device.
   * 
   * Valid values: **1** to **4294967295**.
   * 
   * This parameter is required.
   * 
   * @example
   * 65536
   */
  localAs?: number;
  /**
   * @remarks
   * The region ID of the SAG instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the SAG instance belongs.
   * 
   * @example
   * 147304382796****
   */
  resourceUid?: string;
  /**
   * @remarks
   * The ID of the BGP router.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.XX.XX.1
   */
  routerId?: string;
  /**
   * @remarks
   * The ID of the Smart Access Gateway (SAG) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-v9un1ccz22owd7****
   */
  sagInsId?: string;
  /**
   * @remarks
   * The serial number of the SAG device.
   * 
   * This parameter is required.
   * 
   * @example
   * sagf4dk****
   */
  sagSn?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccount: 'CrossAccount',
      holdTime: 'HoldTime',
      keepAlive: 'KeepAlive',
      localAs: 'LocalAs',
      regionId: 'RegionId',
      resourceUid: 'ResourceUid',
      routerId: 'RouterId',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccount: 'boolean',
      holdTime: 'number',
      keepAlive: 'number',
      localAs: 'number',
      regionId: 'string',
      resourceUid: 'string',
      routerId: 'string',
      sagInsId: 'string',
      sagSn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

