// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateTransitRouterPolicyTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the association between the policy route table and the network instance connection.
   * 
   * @example
   * pta-123asfzc
   */
  associationId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ADD98358-D265-4060-87CB-A2427F5A8944
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      associationId: 'AssociationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

