// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmartAccessGatewayOspfRouteRequest extends $dara.Model {
  /**
   * @remarks
   * The OSPF area ID.
   * 
   * Valid values: **1** to **2147483647**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  areaId?: number;
  /**
   * @remarks
   * The authentication type. Valid values:
   * 
   * - **NONE**: disables authentication.
   * 
   * - **CLEARTEXT**: uses plaintext authentication.
   * 
   * - **MD5**: uses MD5 authentication.
   * 
   * This parameter is required.
   * 
   * @example
   * MD5
   */
  authenticationType?: string;
  /**
   * @remarks
   * Specifies whether to query only cross-account Smart Access Gateway instances. Valid values:
   * 
   * - **false** (default): no.
   * 
   * - **true**: yes.
   * 
   * @example
   * false
   */
  crossAccount?: boolean;
  /**
   * @remarks
   * The OSPF dead interval. Unit: seconds.
   * 
   * Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 40
   */
  deadTime?: number;
  /**
   * @remarks
   * The interval at which Hello packets are sent. Unit: seconds.
   * 
   * Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  helloTime?: number;
  /**
   * @remarks
   * The port name.
   * 
   * > This parameter does not take effect.
   * 
   * @example
   * 2
   */
  interfaceName?: string;
  /**
   * @remarks
   * The value of the MD5 key.
   * 
   * Valid values: **1** to **47**.
   * 
   * > This parameter is required only when **AuthenticationType** is set to **MD5**.
   * 
   * @example
   * 5
   */
  md5Key?: string;
  /**
   * @remarks
   * The ID of the MD5 key.
   * 
   * Valid values: **1** to **2147483647**.
   * 
   * > This parameter is required only when **AuthenticationType** is set to **MD5**.
   * 
   * @example
   * 7
   */
  md5KeyId?: number;
  /**
   * @remarks
   * The CIDR block.
   * > This parameter does not take effect.
   * 
   * @example
   * 192.168.10.0/24
   */
  networks?: string;
  /**
   * @remarks
   * The OSPF route cost.
   * > This parameter does not take effect.
   * 
   * @example
   * 11
   */
  ospfCost?: number;
  /**
   * @remarks
   * The OSPF area type.
   * > This parameter does not take effect.
   * 
   * @example
   * NSSA
   */
  ospfNetworkType?: string;
  /**
   * @remarks
   * The password for plaintext authentication.
   * 
   * The password must be 1 to 8 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * > This parameter is required only when **AuthenticationType** is set to **CLEARTEXT**.
   * 
   * @example
   * duuf****
   */
  password?: string;
  /**
   * @remarks
   * The route redistribution protocol.
   * > This parameter does not take effect.
   * 
   * @example
   * OSPF
   */
  redistributeProtocol?: string;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to obtain region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 109790620697****
   */
  resourceUid?: string;
  /**
   * @remarks
   * The OSPF router ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.XX.XX.1
   */
  routerId?: string;
  /**
   * @remarks
   * The Smart Access Gateway instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-3manef62evrfr6****
   */
  sagInsId?: string;
  /**
   * @remarks
   * The serial number of the Smart Access Gateway device.
   * 
   * This parameter is required.
   * 
   * @example
   * sagf4dk****
   */
  sagSn?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      authenticationType: 'AuthenticationType',
      crossAccount: 'CrossAccount',
      deadTime: 'DeadTime',
      helloTime: 'HelloTime',
      interfaceName: 'InterfaceName',
      md5Key: 'Md5Key',
      md5KeyId: 'Md5KeyId',
      networks: 'Networks',
      ospfCost: 'OspfCost',
      ospfNetworkType: 'OspfNetworkType',
      password: 'Password',
      redistributeProtocol: 'RedistributeProtocol',
      regionId: 'RegionId',
      resourceUid: 'ResourceUid',
      routerId: 'RouterId',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'number',
      authenticationType: 'string',
      crossAccount: 'boolean',
      deadTime: 'number',
      helloTime: 'number',
      interfaceName: 'string',
      md5Key: 'string',
      md5KeyId: 'number',
      networks: 'string',
      ospfCost: 'number',
      ospfNetworkType: 'string',
      password: 'string',
      redistributeProtocol: 'string',
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

