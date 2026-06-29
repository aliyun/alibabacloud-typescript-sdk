// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicyClassesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the attached resource.
   * 
   * @example
   * route-001
   */
  attachResourceId?: string;
  /**
   * @remarks
   * The type of resource that the policy can be attached to. Valid values:
   * - HttpApi: HttpApi.
   * - Operation: an operation of an HttpApi.
   * - GatewayRoute: a gateway route.
   * - GatewayService: a gateway service.
   * - GatewayServicePort: a gateway service port.
   * - Domain: a gateway domain name.
   * - Gateway: a gateway.
   * 
   * @example
   * Operation
   */
  attachResourceType?: string;
  /**
   * @remarks
   * The direction of the policy. Valid values:
   * - OutBound: outbound.
   * - InBound: inbound.
   * - Both: both directions.
   * 
   * @example
   * InBound
   */
  direction?: string;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * gw-001
   */
  gatewayId?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
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
   * The policy templatetype.
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

