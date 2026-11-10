// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateTransitRouterPolicyTableRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the network instance connection.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-attach-2nalp6yksc805w****
   */
  attachmentId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the value from your client. Make sure that the value is unique across different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. The dry run includes checks on permissions and instance status. Valid values:
   * 
   * - **false** (default): sends a normal request. The system performs the check and directly associates the policy route table if the check passes.
   * - **true**: sends a dry run request. The system only performs the check and does not associate the policy route table. Check items include whether required parameters are specified and the request format. If the check fails, an error is returned. If the check passes, the request ID is returned.
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
      attachmentId: 'AttachmentId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      policyTableId: 'PolicyTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentId: 'string',
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

