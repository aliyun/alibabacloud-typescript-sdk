// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTransitRouterPolicyTableRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 02fb3da4****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. Checks include permissions and instance status. Valid values:
   * 
   * - **false** (default): sends a normal request. If the request passes the check, the policy route table is deleted.
   * - **true**: performs a dry run. The policy route table is not deleted. The system checks whether required parameters are specified and whether the request format is valid. If the request fails the dry run, an error is returned. If the request passes the dry run, the request ID is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID of the policy routing table.
   * 
   * This parameter is required.
   * 
   * @example
   * ptbl-abc123xyz
   */
  policyTableId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      policyTableId: 'PolicyTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      policyTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

