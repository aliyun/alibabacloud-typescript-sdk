// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayServiceRequestFilterParams extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-5017305290e14centbrveca****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The group.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The namespace to which the service belongs.
   * 
   * @example
   * public
   */
  namespace?: string;
  /**
   * @remarks
   * The protocol of the service.
   * 
   * *   HTTP
   * *   HTTPS
   * *   HTTP2
   * *   GRPC
   * *   DUBBO
   * 
   * @example
   * HTTP
   */
  serviceProtocol?: string;
  /**
   * @remarks
   * The type of the source.
   * 
   * @example
   * MSE
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayUniqueId: 'GatewayUniqueId',
      groupName: 'GroupName',
      name: 'Name',
      namespace: 'Namespace',
      serviceProtocol: 'ServiceProtocol',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayUniqueId: 'string',
      groupName: 'string',
      name: 'string',
      namespace: 'string',
      serviceProtocol: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Specifies whether to enable sorting.
   * 
   * @example
   * false
   */
  descSort?: boolean;
  /**
   * @remarks
   * The parameters that are used to specify filter conditions. The values of the parameters are in the format of {"key1":"value1"}.
   */
  filterParams?: ListGatewayServiceRequestFilterParams;
  /**
   * @remarks
   * The item based on which entries are sorted.
   * 
   * @example
   * GmtCreate
   */
  orderItem?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      descSort: 'DescSort',
      filterParams: 'FilterParams',
      orderItem: 'OrderItem',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      descSort: 'boolean',
      filterParams: ListGatewayServiceRequestFilterParams,
      orderItem: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(this.filterParams && typeof (this.filterParams as any).validate === 'function') {
      (this.filterParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

