// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAllExpirationDayRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The expiration date. You can set an expiration date only for ECS instances that have not expired. The expiration date that you specify do not take effect on expired ECS instances. After the expiration date is set, the expiration date is used when you renew ECS instances.
   * 
   * You can set the expiration date to a day from the 1st to the 28th of each month.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  unifyExpireDay?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      unifyExpireDay: 'UnifyExpireDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      unifyExpireDay: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

