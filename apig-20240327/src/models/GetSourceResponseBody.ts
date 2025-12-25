// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSourceResponseBodyDataK8SSourceInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the Container Service for Kubernetes (ACK) cluster.
   * 
   * @example
   * c2d290b2d8b5d4935864cace5f0173f31
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSourceResponseBodyDataNacosSourceInfo extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the Nacos instance.
   * 
   * @example
   * mse
   */
  address?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * fluss-cn-w7k4hann601
   */
  clusterId?: string;
  /**
   * @remarks
   * The Nacos instance ID.
   * 
   * @example
   * hgprecn-cn-cfn47q7oh001
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      clusterId: 'clusterId',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      clusterId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation timestamp.
   * 
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * gw-cq2vundlhtg***
   */
  gatewayId?: string;
  /**
   * @remarks
   * Kubernetes source information.
   */
  k8SSourceInfo?: GetSourceResponseBodyDataK8SSourceInfo;
  /**
   * @remarks
   * The source information when the source type is MSE_NACOS.
   */
  nacosSourceInfo?: GetSourceResponseBodyDataNacosSourceInfo;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * import-test
   */
  name?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekz4us4iruleja
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * @example
   * src-crdddallhtgt***
   */
  sourceId?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * K8S
   */
  type?: string;
  /**
   * @remarks
   * The update timestamp.
   * 
   * @example
   * 1719386834548
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      createTimestamp: 'createTimestamp',
      gatewayId: 'gatewayId',
      k8SSourceInfo: 'k8SSourceInfo',
      nacosSourceInfo: 'nacosSourceInfo',
      name: 'name',
      resourceGroupId: 'resourceGroupId',
      sourceId: 'sourceId',
      type: 'type',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestamp: 'number',
      gatewayId: 'string',
      k8SSourceInfo: GetSourceResponseBodyDataK8SSourceInfo,
      nacosSourceInfo: GetSourceResponseBodyDataNacosSourceInfo,
      name: 'string',
      resourceGroupId: 'string',
      sourceId: 'string',
      type: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(this.k8SSourceInfo && typeof (this.k8SSourceInfo as any).validate === 'function') {
      (this.k8SSourceInfo as any).validate();
    }
    if(this.nacosSourceInfo && typeof (this.nacosSourceInfo as any).validate === 'function') {
      (this.nacosSourceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetSourceResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DE10E3C0-A676-5169-812D-6610AACBFAFF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSourceResponseBodyData,
      message: 'string',
      requestId: 'string',
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

