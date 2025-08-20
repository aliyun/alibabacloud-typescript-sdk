// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBusAppConfigResponseBodyRetValue extends $dara.Model {
  cashier?: string;
  /**
   * @example
   * https://******.com/design/******?imageId=xxxxx
   */
  shoppingBar?: string;
  /**
   * @example
   * https://******.com/design/******?imageId=xxxxx
   */
  shoppingWindow?: string;
  /**
   * @example
   * https://******.com/design/******?imageId=xxxxx
   */
  vipLabel?: string;
  static names(): { [key: string]: string } {
    return {
      cashier: 'Cashier',
      shoppingBar: 'ShoppingBar',
      shoppingWindow: 'ShoppingWindow',
      vipLabel: 'VipLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cashier: 'string',
      shoppingBar: 'string',
      shoppingWindow: 'string',
      vipLabel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBusAppConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  retCode?: number;
  /**
   * @example
   * 请求异常
   */
  retMsg?: string;
  retValue?: GetBusAppConfigResponseBodyRetValue;
  static names(): { [key: string]: string } {
    return {
      retCode: 'RetCode',
      retMsg: 'RetMsg',
      retValue: 'RetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retCode: 'number',
      retMsg: 'string',
      retValue: GetBusAppConfigResponseBodyRetValue,
    };
  }

  validate() {
    if(this.retValue && typeof (this.retValue as any).validate === 'function') {
      (this.retValue as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

