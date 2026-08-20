// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResolverEndpointRequestIpConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the zone where the vSwitch is located.
   * 
   * @example
   * cn-hangzhou-a
   */
  azId?: string;
  /**
   * @remarks
   * The IPv4 CIDR block of the vSwitch.
   * 
   * @example
   * 172.16.XX.XX/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * An IP address that is within the CIDR block of the vSwitch. If you leave this parameter empty, the system automatically assigns an IP address.
   * 
   * @example
   * 172.16.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-0jlgeyq4oazkh5xue****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      azId: 'AzId',
      cidrBlock: 'CidrBlock',
      ip: 'Ip',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azId: 'string',
      cidrBlock: 'string',
      ip: 'string',
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

export class UpdateResolverEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The endpoint ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hr****
   */
  endpointId?: string;
  /**
   * @remarks
   * A list of source IP addresses for outbound traffic. Specify at least two and up to six IP addresses.
   * 
   * > To ensure high availability (HA), an outbound endpoint requires at least two source IP addresses. We recommend that you assign these IP addresses to different zones. An outbound endpoint supports a maximum of six source IP addresses.
   */
  ipConfig?: UpdateResolverEndpointRequestIpConfig[];
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese.
   * 
   * - en: English.
   * 
   * Default value: en
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * @example
   * endpoint-test-name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      ipConfig: 'IpConfig',
      lang: 'Lang',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      ipConfig: { 'type': 'array', 'itemType': UpdateResolverEndpointRequestIpConfig },
      lang: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipConfig)) {
      $dara.Model.validateArray(this.ipConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

