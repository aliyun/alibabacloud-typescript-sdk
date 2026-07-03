// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmartAccessGatewayOspfRouteRequest extends $dara.Model {
  /**
   * @remarks
   * The OSPF area ID.
   * 
   * The value must be an integer from **1** to **2147483647**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  areaId?: number;
  /**
   * @remarks
   * The authentication method. Valid values:
   * 
   * - **NONE**: No authentication is configured.
   * - **CLEARTEXT**: Plaintext authentication is used.
   * - **MD5**: MD5 authentication is used.
   * 
   * This parameter is required.
   * 
   * @example
   * MD5
   */
  authenticationType?: string;
  /**
   * @remarks
   * Specifies whether to query only the SAG instances that belong to other Alibaba Cloud accounts. Valid values:
   * 
   * - **false** (default): No.
   * - **true**: Yes.
   * 
   * @example
   * false
   */
  crossAccount?: boolean;
  /**
   * @remarks
   * The dead interval. Unit: seconds.
   * 
   * The value must be an integer from **1** to **65535**.
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
   * The value must be an integer from **1** to **65535**.
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
   * > This parameter is not in use.
   * 
   * @example
   * 2
   */
  interfaceName?: string;
  /**
   * @remarks
   * The MD5 key.
   * 
   * The value must be 1 to **47** characters in length.
   * 
   * > This parameter is required only when you set **AuthenticationType** to **MD5**.
   * 
   * @example
   * 5
   */
  md5Key?: string;
  /**
   * @remarks
   * The MD5 key ID.
   * 
   * The value must be an integer from 1 to **2147483647**.
   * 
   * > This parameter is required only when you set **AuthenticationType** to **MD5**.
   * 
   * @example
   * 7
   */
  md5KeyId?: number;
  /**
   * @remarks
   * The network segment.
   * 
   * > This parameter is not in use.
   * 
   * @example
   * 192.168.10.0/24
   */
  networks?: string;
  /**
   * @remarks
   * The cost of the OSPF route.
   * 
   * > This parameter is not in use.
   * 
   * @example
   * [110/11]
   */
  ospfCost?: number;
  /**
   * @remarks
   * The OSPF network type.
   * 
   * > This parameter is not in use.
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
   * > This parameter is required only when you set **AuthenticationType** to **CLEARTEXT**.
   * 
   * @example
   * duuf****
   */
  password?: string;
  /**
   * @remarks
   * The route redistribution protocol.
   * 
   * > This parameter is not in use.
   * 
   * @example
   * OSPF
   */
  redistributeProtocol?: string;
  /**
   * @remarks
   * The ID of the region where the SAG instance is deployed.
   * 
   * For more information, see [DescribeRegions](https://help.aliyun.com/document_detail/69813.html).
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
   * The ID of the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-3manef62evrfr6****
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

