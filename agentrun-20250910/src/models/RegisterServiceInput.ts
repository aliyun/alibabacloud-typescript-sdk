// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterServiceInput extends $dara.Model {
  /**
   * @remarks
   * 关联的凭证ID，用于服务认证
   * 
   * @example
   * my-credential
   */
  credentialName?: string;
  /**
   * @remarks
   * 服务的协议类型
   * 
   * This parameter is required.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * 关联的资源名称
   * 
   * @example
   * my-resource
   */
  resourceName?: string;
  /**
   * @remarks
   * 转发的下游服务端点URL，必须是有效的HTTP/HTTPS地址（这里是 FC trigger endpoint）
   * 
   * This parameter is required.
   * 
   * @example
   * https://123456789.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/my-service/my-function/
   */
  serviceBackendEndpoint?: string;
  /**
   * @remarks
   * 服务名称，在租户内唯一
   * 
   * This parameter is required.
   * 
   * @example
   * my-service
   */
  serviceName?: string;
  /**
   * @remarks
   * 服务类型
   * 
   * This parameter is required.
   * 
   * @example
   * FC
   */
  serviceType?: string;
  /**
   * @remarks
   * 租户ID，用于多租户隔离
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123456
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      credentialName: 'credentialName',
      protocol: 'protocol',
      resourceName: 'resourceName',
      serviceBackendEndpoint: 'serviceBackendEndpoint',
      serviceName: 'serviceName',
      serviceType: 'serviceType',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialName: 'string',
      protocol: 'string',
      resourceName: 'string',
      serviceBackendEndpoint: 'string',
      serviceName: 'string',
      serviceType: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

