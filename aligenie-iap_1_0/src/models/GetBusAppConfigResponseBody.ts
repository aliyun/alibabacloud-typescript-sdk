// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBusAppConfigResponseBodyRetValue extends $dara.Model {
  /**
   * @remarks
   * Cashier URL
   */
  cashier?: string;
  /**
   * @remarks
   * Shopping guide bar URL
   * 
   * @example
   * https://******.com/design/******?imageId=xxxxx
   */
  shoppingBar?: string;
  /**
   * @remarks
   * Shopping guide pop-up URL
   * 
   * @example
   * https://******.com/design/******?imageId=xxxxx
   */
  shoppingWindow?: string;
  /**
   * @remarks
   * VIP label transparency URL
   * 
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
   * @remarks
   * Error code returned. 0 indicates success.
   * 
   * @example
   * 0
   */
  retCode?: number;
  /**
   * @remarks
   * Error message returned. No message is returned if the operation succeeded.
   * 
   * @example
   * 请求异常
   */
  retMsg?: string;
  /**
   * @remarks
   * Configuration Information (VIP label, shopping guide bar, shopping guide pop-up)
   */
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

