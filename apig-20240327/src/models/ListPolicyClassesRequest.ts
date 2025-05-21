// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicyClassesRequest extends $dara.Model {
  /**
   * @remarks
   * Types of attachment points supported by the policy.
   * 
   * - HttpApi: HttpApi.
   * - Operation: Operation of HttpApi.
   * - GatewayRoute: Gateway route.
   * - GatewayService: Gateway service.
   * - GatewayServicePort: Gateway service port.
   * - Domain: Gateway domain.
   * - Gateway: Gateway.
   * 
   * @example
   * Operation
   */
  attachResourceType?: string;
  /**
   * @remarks
   * Direction of the policy.
   * - Outbound: OutBound.
   * - Inbound: InBound.
   * - Both directions: Both.
   * 
   * @example
   * InBound
   */
  direction?: string;
  /**
   * @remarks
   * Page number, default is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Type of the policy template.
   * 
   * @example
   * FlowControl
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attachResourceType: 'attachResourceType',
      direction: 'direction',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceType: 'string',
      direction: 'string',
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

