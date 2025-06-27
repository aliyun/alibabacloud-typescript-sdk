// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGtmRecoveryPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The language used by the user.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the disaster recovery plan that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  recoveryPlanId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      recoveryPlanId: 'RecoveryPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      recoveryPlanId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

