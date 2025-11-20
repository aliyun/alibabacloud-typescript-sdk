// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The attachment point ID.
   * 
   * @example
   * api-cq7l5s5lhtgi6qasrdc0
   */
  attachResourceId?: string;
  /**
   * @remarks
   * The types of attachment points supported by the policy. Valid values: 
   * 
   * - HttpApi
   * - Operation
   * - GatewayRoute
   * - GatewayService
   * - GatewayServicePort
   * - Domain
   * - Gateway
   * 
   * @example
   * HttpApi
   */
  attachResourceType?: string;
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cq7l5s5lhtgi6qasrdc0
   */
  environmentId?: string;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * gw-cq2fm65lhtgm9nrrl7ag
   */
  gatewayId?: string;
  /**
   * @remarks
   * Specifies whether to return attachment information.
   * 
   * @example
   * false
   */
  withAttachments?: boolean;
  /**
   * @remarks
   * Specifies whether it is a system policy.
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

