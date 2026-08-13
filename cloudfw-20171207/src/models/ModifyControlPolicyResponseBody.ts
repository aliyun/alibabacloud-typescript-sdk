// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyControlPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether this is a successful dry run response. A value of true indicates that only the dry run was completed and no actual modification was performed.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
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

