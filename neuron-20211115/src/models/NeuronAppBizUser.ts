// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NeuronAppBizUser extends $dara.Model {
  /**
   * @example
   * 1235254534
   */
  accountId?: number;
  /**
   * @example
   * 233131
   */
  bizId?: string;
  /**
   * @example
   * ADMIN
   */
  permission?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      bizId: 'bizId',
      permission: 'permission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      bizId: 'string',
      permission: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

