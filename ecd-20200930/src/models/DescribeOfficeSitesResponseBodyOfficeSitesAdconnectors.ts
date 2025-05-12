// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOfficeSitesResponseBodyOfficeSitesADConnectors extends $dara.Model {
  /**
   * @remarks
   * The connection address of the AD connector.
   * 
   * @example
   * 172.24.*.*
   */
  ADConnectorAddress?: string;
  /**
   * @remarks
   * The status of the AD connector.
   * 
   * Valid values:
   * 
   * *   CONNECT_ERROR
   * *   RUNNING
   * *   CONNECTING (You must configure the AD domain in which the AD connector is used.)
   * *   EXPIRED
   * *   CREATING
   * 
   * @example
   * RUNNING
   */
  connectorStatus?: string;
  /**
   * @remarks
   * The ID of an elastic network interface (ENI) to which the AD connector is mounted.
   * 
   * @example
   * eni-bp1i4wx78lgosrj6****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The AD connector type.
   * 
   * Valid values:
   * 
   * *   1: General
   * *   2: Advanced
   * 
   * @example
   * 1
   */
  specification?: string;
  /**
   * @remarks
   * The trust password that is specified when you configure the AD trust relationship.
   * 
   * @example
   * password123***
   */
  trustKey?: string;
  /**
   * @remarks
   * The ID of the vSwitch that resides in the network of the AD connector.
   * 
   * @example
   * vsw-bp19ocz3erfx15uon****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      ADConnectorAddress: 'ADConnectorAddress',
      connectorStatus: 'ConnectorStatus',
      networkInterfaceId: 'NetworkInterfaceId',
      specification: 'Specification',
      trustKey: 'TrustKey',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ADConnectorAddress: 'string',
      connectorStatus: 'string',
      networkInterfaceId: 'string',
      specification: 'string',
      trustKey: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

