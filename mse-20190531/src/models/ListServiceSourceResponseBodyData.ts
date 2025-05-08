// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListServiceSourceResponseBodyDataIngressOptions } from "./ListServiceSourceResponseBodyDataIngressOptions";


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

