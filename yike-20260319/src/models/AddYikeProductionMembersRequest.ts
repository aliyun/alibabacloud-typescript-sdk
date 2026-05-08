// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddYikeProductionMembersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pd_061716***
   */
  productionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 21*****
   */
  yikeUserIds?: string;
  static names(): { [key: string]: string } {
    return {
      productionId: 'ProductionId',
      yikeUserIds: 'YikeUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productionId: 'string',
      yikeUserIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

