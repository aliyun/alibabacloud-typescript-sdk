// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceEndpointResponseBodyData extends $dara.Model {
  certIdentifier?: string;
  component?: string;
  createTime?: string;
  domain?: string;
  domainType?: string;
  endpointId?: string;
  endpointName?: string;
  instanceId?: string;
  networkType?: string;
  regionId?: string;
  status?: string;
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
   * @example
   * SUCCESS
   */
  code?: string;
  data?: GetServiceEndpointResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * req-xxx
   */
  requestId?: string;
  /**
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

