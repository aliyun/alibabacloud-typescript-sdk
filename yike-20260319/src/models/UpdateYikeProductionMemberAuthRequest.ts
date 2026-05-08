// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateYikeProductionMemberAuthRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Manage
   */
  auth?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pd_061716****
   */
  productionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  yikeUserId?: string;
  static names(): { [key: string]: string } {
    return {
      auth: 'Auth',
      productionId: 'ProductionId',
      yikeUserId: 'YikeUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth: 'string',
      productionId: 'string',
      yikeUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

