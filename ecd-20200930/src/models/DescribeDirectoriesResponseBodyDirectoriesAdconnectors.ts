// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDirectoriesResponseBodyDirectoriesADConnectors extends $dara.Model {
  /**
   * @remarks
   * The connection address.
   * 
   * @example
   * ``172.17.**.**``
   */
  ADConnectorAddress?: string;
  /**
   * @remarks
   * Valid values:
   * 
   * *   CONNECT_ERROR
   * *   RUNNING
   * *   CONNECTING: You must configure domain trust for your AD system.
   * *   EXPIRED
   * *   CREATING
   * 
   * @example
   * RUNNING
   */
  connectorStatus?: string;
  /**
   * @remarks
   * The ID of the NIC to which the AD connector is mounted.
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
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   2: Advanced
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * 1
   */
  specification?: string;
  /**
   * @remarks
   * The trust password of the AD domain controller.
   * 
   * @example
   * yfpoAD****
   */
  trustKey?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the AD connector is associated.
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

