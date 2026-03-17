// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmartAccessGatewayOspfRouteRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  areaId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MD5
   */
  authenticationType?: string;
  /**
   * @example
   * false
   */
  crossAccount?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 40
   */
  deadTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  helloTime?: number;
  interfaceName?: string;
  /**
   * @example
   * 5
   */
  md5Key?: string;
  /**
   * @example
   * 7
   */
  md5KeyId?: number;
  networks?: string;
  ospfCost?: number;
  ospfNetworkType?: string;
  /**
   * @example
   * duuf****
   */
  password?: string;
  redistributeProtocol?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 109790620697****
   */
  resourceUid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 192.XX.XX.1
   */
  routerId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sag-3manef62evrfr6****
   */
  sagInsId?: string;
  /**
   * @remarks
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

