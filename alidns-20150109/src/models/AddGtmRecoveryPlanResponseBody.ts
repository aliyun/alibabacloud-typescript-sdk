// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGtmRecoveryPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the disaster recovery plan.
   * 
   * @example
   * 100
   */
  recoveryPlanId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recoveryPlanId: 'RecoveryPlanId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recoveryPlanId: 'string',
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

