// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisassociateTransitRouterPolicyTableRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the association between the transit router policy table and the network instance connection.
   * 
   * This parameter is required.
   * 
   * @example
   * pta-123asdfqwe
   */
  associationId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that the value is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run before sending the request. The dry run includes permission and instance status checks. Valid values:
   * 
   * - **false** (default): sends a normal request. After the request passes the dry run, the network instance connection is disassociated from the transit router policy table.
   * - **true**: performs a dry run without sending the request. The system checks whether required parameters are specified and validates the request format. If the request fails the dry run, an error is returned. If the request passes the dry run, the request ID is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      associationId: 'AssociationId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

