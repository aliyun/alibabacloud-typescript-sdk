// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBlackListStrategyRequestBlackListStrategy extends $dara.Model {
  /**
   * @remarks
   * The blacklist string. Separate multiple entries with commas (,).
   * 
   * @example
   * 127.0.0.1,127.0.0.2
   */
  bizContent?: string;
  /**
   * @remarks
   * The blacklist type. Valid values:
   * - **mobile**: mobile number blacklist.
   * - **ip**: IP blacklist.
   * - **identifyNum**: ID card blacklist.
   * - **bankCard**: bank card blacklist.
   * 
   * @example
   * ip
   */
  bizKey?: string;
  /**
   * @remarks
   * The rule ID. Valid values:
   * - **Empty**: creates a rule.
   * - **Not empty**: modifies a rule.
   * 
   * @example
   * 38
   */
  id?: number;
  /**
   * @remarks
   * The product name. Valid values:
   * - **id2meta**: ID card two-element verification.
   * - **mobile3Meta**: mobile number element verification.
   * - **bankcardMeta**: bank card element verification.
   * 
   * @example
   * id2meta
   */
  productName?: string;
  /**
   * @remarks
   * The authentication status. Valid values:
   * - **1**: Authentication passed.
   * - **2**: Authentication failed.
   * 
   * @example
   * 3
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bizContent: 'BizContent',
      bizKey: 'BizKey',
      id: 'Id',
      productName: 'ProductName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizContent: 'string',
      bizKey: 'string',
      id: 'number',
      productName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBlackListStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The blacklist rule.
   */
  blackListStrategy?: ModifyBlackListStrategyRequestBlackListStrategy;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      blackListStrategy: 'BlackListStrategy',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackListStrategy: ModifyBlackListStrategyRequestBlackListStrategy,
      regionId: 'string',
    };
  }

  validate() {
    if(this.blackListStrategy && typeof (this.blackListStrategy as any).validate === 'function') {
      (this.blackListStrategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

