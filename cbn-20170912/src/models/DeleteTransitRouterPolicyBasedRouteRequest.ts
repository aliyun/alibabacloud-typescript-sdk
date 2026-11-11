// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTransitRouterPolicyBasedRouteRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, and you must ensure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the deletion request. The system checks items such as permissions and instance status. Valid values:
   * 
   * - **false** (default): sends a normal request. If the request passes the dry run, the policy-based routing rule is deleted.
   * - **true**: performs a dry run only and does not delete the policy-based routing rule. The system checks whether required parameters are specified and whether the request format is valid. If the request fails the dry run, an error is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
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
      dryRun: 'DryRun',
      policyBasedRouteId: 'PolicyBasedRouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
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

