// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceSourceResponseBodyDataIngressOptions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Ingresses are enabled.
   * 
   * @example
   * true
   */
  enableIngress?: boolean;
  /**
   * @remarks
   * Indicates whether the Ingress status is updated.
   * 
   * @example
   * true
   */
  enableStatus?: boolean;
  /**
   * @remarks
   * The Ingress class.
   * 
   * @example
   * com.test.xxx
   */
  ingressClass?: string;
  /**
   * @remarks
   * The namespace that you want to monitor.
   * 
   * @example
   * default
   */
  watchNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      enableIngress: 'EnableIngress',
      enableStatus: 'EnableStatus',
      ingressClass: 'IngressClass',
      watchNamespace: 'WatchNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableIngress: 'boolean',
      enableStatus: 'boolean',
      ingressClass: 'string',
      watchNamespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceSourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Container Service for Kubernetes (ACK) cluster or the endpoint of the Microservices Engine (MSE) instance.
   * 
   * @example
   * ***
   */
  address?: string;
  /**
   * @remarks
   * Indicates whether the service source is associated with the gateway. The value 1 indicates that the service source is associated with the gateway.
   * 
   * @example
   * 1
   */
  bindingWithGateway?: number;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * 1
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-2u9uhd9283hd92hgd39g239dg2*****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-01-07 18:07:57
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2022-01-07 18:07:57
   */
  gmtModified?: string;
  /**
   * @remarks
   * The array of service groups.
   */
  groupList?: string[];
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The information about the support for Ingresses by applications.
   */
  ingressOptions?: ListServiceSourceResponseBodyDataIngressOptions;
  invalid?: boolean;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The array of root paths of service lists.
   */
  pathList?: string[];
  /**
   * @remarks
   * The type of the service source.
   * 
   * @example
   * MSE
   */
  source?: string;
  /**
   * @remarks
   * The unique ID of the service source.
   * 
   * @example
   * mse-cn-***
   */
  sourceUniqueId?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * NACOS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      bindingWithGateway: 'BindingWithGateway',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupList: 'GroupList',
      id: 'Id',
      ingressOptions: 'IngressOptions',
      invalid: 'Invalid',
      name: 'Name',
      pathList: 'PathList',
      source: 'Source',
      sourceUniqueId: 'SourceUniqueId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      bindingWithGateway: 'number',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      groupList: { 'type': 'array', 'itemType': 'string' },
      id: 'number',
      ingressOptions: ListServiceSourceResponseBodyDataIngressOptions,
      invalid: 'boolean',
      name: 'string',
      pathList: { 'type': 'array', 'itemType': 'string' },
      source: 'string',
      sourceUniqueId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupList)) {
      $dara.Model.validateArray(this.groupList);
    }
    if(this.ingressOptions && typeof (this.ingressOptions as any).validate === 'function') {
      (this.ingressOptions as any).validate();
    }
    if(Array.isArray(this.pathList)) {
      $dara.Model.validateArray(this.pathList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListServiceSourceResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B8C4B0D8-EBB9-5F20-8295-04224FBE5529
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListServiceSourceResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

