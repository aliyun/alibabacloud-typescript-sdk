// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBranchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The branch ID. This ID uniquely identifies a Supabase branch.
   * 
   * @example
   * br-xxxx
   */
  branchId?: string;
  /**
   * @remarks
   * The Supabase project ID that corresponds to the primary branch.
   * 
   * @example
   * spb-xxxx
   */
  projectId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      branchId: 'BranchId',
      projectId: 'ProjectId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchId: 'string',
      projectId: 'string',
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

