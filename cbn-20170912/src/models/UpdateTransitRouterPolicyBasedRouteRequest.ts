// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransitRouterPolicyBasedRouteRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the value from your client. Make sure that the value is unique among different requests. The ClientToken parameter supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the policy-based route rule.
   * 
   * The description can be empty or 1 to 256 characters in length. It cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run on the request. Valid values:
   * - **true**: sends a check request and does not update the policy-based route rule. The system checks whether required parameters are specified, the request format is valid, and service limits are met. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * - **false** (default): sends a normal request and directly updates the policy-based route rule after the check succeeds.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The name of the policy-based route rule.
   * 
   * The name can be empty or 1 to 128 characters in length. It cannot start with http:// or https://.
   * 
   * @example
   * nametest
   */
  name?: string;
  /**
   * @remarks
   * The instance ID of the policy-based routing rule.
   * 
   * This parameter is required.
   * 
   * @example
   * pbr-123abczcx
   */
  policyBasedRouteId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      name: 'Name',
      policyBasedRouteId: 'PolicyBasedRouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      name: 'string',
      policyBasedRouteId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

