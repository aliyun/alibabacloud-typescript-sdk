// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTransferInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  proposalId?: number;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      proposalId: 'ProposalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      proposalId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

