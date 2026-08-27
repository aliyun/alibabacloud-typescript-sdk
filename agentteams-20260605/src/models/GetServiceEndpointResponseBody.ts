// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceEndpointResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The certificate identifier.
   * 
   * @example
   * cert-xxx
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The component type. Valid values:
   *  * ELEMENT: element
   *  * TUNNEL: tunnel
   *  * MATRIX: matrix
   *  * WORKER: worker
   * 
   * @example
   * WORKER
   */
  component?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * matrix.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The domain name type. Valid values:
   *  * BUILTIN: built-in
   *  * CUSTOM: custom
   * 
   * @example
   * CUSTOM
   */
  domainType?: string;
  /**
   * @remarks
   * Endpoint ID
   * 
   * @example
   * mep-test0001
   */
  endpointId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * matrix-service
   */
  endpointName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * agentteams-demo
   */
  instanceId?: string;
  /**
   * @remarks
   * The network type. Valid values:
   *  * NONE: none
   *  * INTRANET: internal network
   *  * INTERNET: Internet
   * 
   * @example
   * INTERNET
   */
  networkType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * CONFIGURED
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      component: 'Component',
      createTime: 'CreateTime',
      domain: 'Domain',
      domainType: 'DomainType',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      instanceId: 'InstanceId',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      component: 'string',
      createTime: 'string',
      domain: 'string',
      domainType: 'string',
      endpointId: 'string',
      endpointName: 'string',
      instanceId: 'string',
      networkType: 'string',
      regionId: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code returned on success.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The details of the endpoint.
   * 
   * @example
   * {}
   */
  data?: GetServiceEndpointResponseBodyData;
  /**
   * @remarks
   * **message**
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * **requestId**
   * 
   * @example
   * req-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetServiceEndpointResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

