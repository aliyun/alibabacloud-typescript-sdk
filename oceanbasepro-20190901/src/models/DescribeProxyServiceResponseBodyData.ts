// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProxyServiceResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2023-07-05T08:23:10Z
   */
  createTime?: string;
  /**
   * @example
   * 1
   */
  currentEndpointNum?: number;
  /**
   * @example
   * 3
   */
  endpointNumQuota?: number;
  /**
   * @example
   * 2123-07-05T16:00:00
   */
  expireTime?: string;
  /**
   * @example
   * proxy-3t****zrieasg
   */
  proxyClusterId?: string;
  /**
   * @example
   * shared
   */
  proxyMode?: string;
  /**
   * @example
   * 1.0
   */
  proxyServiceVersion?: string;
  /**
   * @example
   * 4.3.1.0-xxxxxxxxx
   */
  proxyVersion?: string;
  /**
   * @example
   * ONLINE
   */
  status?: string;
  /**
   * @example
   * 1
   */
  unitNum?: number;
  /**
   * @example
   * 4
   */
  unitNumLimit?: number;
  /**
   * @example
   * 4C8GB
   */
  unitSpec?: string;
  /**
   * @example
   * cn-shanghai-e,cn-shanghai-f
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      currentEndpointNum: 'CurrentEndpointNum',
      endpointNumQuota: 'EndpointNumQuota',
      expireTime: 'ExpireTime',
      proxyClusterId: 'ProxyClusterId',
      proxyMode: 'ProxyMode',
      proxyServiceVersion: 'ProxyServiceVersion',
      proxyVersion: 'ProxyVersion',
      status: 'Status',
      unitNum: 'UnitNum',
      unitNumLimit: 'UnitNumLimit',
      unitSpec: 'UnitSpec',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      currentEndpointNum: 'number',
      endpointNumQuota: 'number',
      expireTime: 'string',
      proxyClusterId: 'string',
      proxyMode: 'string',
      proxyServiceVersion: 'string',
      proxyVersion: 'string',
      status: 'string',
      unitNum: 'number',
      unitNumLimit: 'number',
      unitSpec: 'string',
      zone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

