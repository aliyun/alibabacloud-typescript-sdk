// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicyClassesRequest extends $dara.Model {
  /**
   * @remarks
   * The resource ID to attach the policy
   * 
   * @example
   * route-001
   */
  attachResourceId?: string;
  /**
   * @remarks
   * The supported mount point type. Valid values:
   * 
   * *   HttpApi: an HTTP API
   * *   Operation: an operation in an HTTP API
   * *   GatewayRoute: a route
   * *   GatewayService: a service
   * *   GatewayServicePort: a service port
   * *   Domain: a domain name
   * *   Gateway: an instance
   * 
   * @example
   * Operation
   */
  attachResourceType?: string;
  /**
   * @remarks
   * The direction of traffic on which the policy takes effect. Valid values:
   * 
   * *   OutBound
   * *   InBound
   * *   Both
   * 
   * @example
   * InBound
   */
  direction?: string;
  /**
   * @remarks
   * The gateway ID
   * 
   * @example
   * gw-001
   */
  gatewayId?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The template type.
   * 
   * @example
   * FlowControl
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attachResourceId: 'attachResourceId',
      attachResourceType: 'attachResourceType',
      direction: 'direction',
      gatewayId: 'gatewayId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceId: 'string',
      attachResourceType: 'string',
      direction: 'string',
      gatewayId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

