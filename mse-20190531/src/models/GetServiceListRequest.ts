// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceListRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx@xxx
   */
  appId?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 127.0.0.1
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-zhangjiakou
   */
  region?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * com.alibaba.xxx
   */
  serviceName?: string;
  /**
   * @remarks
   * The type of the framework.
   * 
   * @example
   * dubbo
   */
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      ip: 'Ip',
      region: 'Region',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      ip: 'string',
      region: 'string',
      serviceName: 'string',
      serviceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

