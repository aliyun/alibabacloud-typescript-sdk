// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WithdrawQuotaApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the quota application.
   * 
   * This parameter is required.
   * 
   * @example
   * d314d6ae-867d-484c-9009-3d42****
   */
  applicationId?: string;
  /**
   * @remarks
   * The reason for withdrawing the quota increase request.
   * 
   * @example
   * DesireValue is wrong
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

