// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the mount point.
   * 
   * @example
   * api-cq7l5s5lhtgi6qasrdc0
   */
  attachResourceId?: string;
  /**
   * @remarks
   * The type of mount points supported by the policy. Valid values:
   * - HttpApi: HTTP API.
   * - Operation: The operation of the HTTP API.
   * - GatewayRoute: Gateway route.
   * - GatewayService: Gateway service.
   * - GatewayServicePort: Gateway service port.
   * - Domain: Gateway domain name.
   * - Gateway: Gateway.
   * 
   * @example
   * HttpApi
   */
  attachResourceType?: string;
  /**
   * @remarks
   * The ID of the environment.
   * 
   * @example
   * env-cq7l5s5lhtgi6qasrdc0
   */
  environmentId?: string;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * gw-cq2fm65lhtgm9nrrl7ag
   */
  gatewayId?: string;
  /**
   * @remarks
   * The page number. Pages start from 1.
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to return mount information.
   * 
   * @example
   * false
   */
  withAttachments?: boolean;
  /**
   * @remarks
   * Specifies whether the policy is a system policy.
   * 
   * @example
   * true
   */
  withSystemPolicy?: boolean;
  static names(): { [key: string]: string } {
    return {
      attachResourceId: 'attachResourceId',
      attachResourceType: 'attachResourceType',
      environmentId: 'environmentId',
      gatewayId: 'gatewayId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      withAttachments: 'withAttachments',
      withSystemPolicy: 'withSystemPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceId: 'string',
      attachResourceType: 'string',
      environmentId: 'string',
      gatewayId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      withAttachments: 'boolean',
      withSystemPolicy: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

