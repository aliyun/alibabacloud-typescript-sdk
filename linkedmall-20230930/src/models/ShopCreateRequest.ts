// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShopCreateRequest extends $dara.Model {
  /**
   * @remarks
   * The after-sales DingTalk ID.
   * 
   * @example
   * 12344335
   */
  afterSaleDingTalkId?: string;
  /**
   * @remarks
   * The shop description.
   * 
   * This parameter is required.
   * 
   * @example
   * Shop description
   */
  description?: string;
  /**
   * @remarks
   * The operations DingTalk ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12344335
   */
  operatorDingTalkId?: string;
  /**
   * @remarks
   * The pre-sales DingTalk ID.
   * 
   * @example
   * 12344335
   */
  preSaleDingTalkId?: string;
  /**
   * @remarks
   * The shop name.
   * 
   * This parameter is required.
   * 
   * @example
   * Shop name
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

