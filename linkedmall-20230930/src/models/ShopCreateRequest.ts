// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShopCreateRequest extends $dara.Model {
  /**
   * @example
   * 12344335
   */
  afterSaleDingTalkId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 店铺描述
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12344335
   */
  operatorDingTalkId?: string;
  /**
   * @example
   * 12344335
   */
  preSaleDingTalkId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 店铺名称
   */
  shopName?: string;
  static names(): { [key: string]: string } {
    return {
      afterSaleDingTalkId: 'afterSaleDingTalkId',
      description: 'description',
      operatorDingTalkId: 'operatorDingTalkId',
      preSaleDingTalkId: 'preSaleDingTalkId',
      shopName: 'shopName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterSaleDingTalkId: 'string',
      description: 'string',
      operatorDingTalkId: 'string',
      preSaleDingTalkId: 'string',
      shopName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

