// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AutoRenewInstanceRequest extends $dara.Model {
  autoRenewCycle?: string;
  autoRenewDuration?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  orderBizId?: number;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewCycle: 'AutoRenewCycle',
      autoRenewDuration: 'AutoRenewDuration',
      orderBizId: 'OrderBizId',
      ownerId: 'OwnerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewCycle: 'string',
      autoRenewDuration: 'number',
      orderBizId: 'number',
      ownerId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

