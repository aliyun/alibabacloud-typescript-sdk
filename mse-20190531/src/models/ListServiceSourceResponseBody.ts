// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceSourceResponseBodyDataIngressOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable or disable Ingress.
   * 
   * @example
   * true
   */
  enableIngress?: boolean;
  /**
   * @remarks
   * Specifies whether to update IngressStatus.
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
   * The monitored namespace.
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
   * The ACK ID or the MSE registry address.
   * 
   * @example
   * ***
   */
  address?: string;
  /**
   * @remarks
   * Indicates whether the binding is completed. A value of 1 indicates that the binding is completed.
   * 
   * @example
   * 1
   */
  bindingWithGateway?: number;
  /**
   * @remarks
   * The gateway ID.
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
   * The Ingress support for application routing.
   */
  ingressOptions?: ListServiceSourceResponseBodyDataIngressOptions;
  /**
   * @remarks
   * Indicates whether the source is valid.
   */
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
   * The array of root paths for the service list.
   */
  pathList?: string[];
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * MSE
   */
  source?: string;
  /**
   * @remarks
   * The unique identifier of the source.
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
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned results.
   */
  data?: ListServiceSourceResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * You are not authorized to perform this operation.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B8C4B0D8-EBB9-5F20-8295-04224FBE5529
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - `true`: The request is successful.
   * - `false`: The request fails.
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

