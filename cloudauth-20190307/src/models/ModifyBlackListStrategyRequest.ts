// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBlackListStrategyRequestBlackListStrategy extends $dara.Model {
  /**
   * @remarks
   * Blacklist string, with each blacklist entry separated by commas.
   * 
   * @example
   * 127.0.0.1,127.0.0.2
   */
  bizContent?: string;
  /**
   * @remarks
   * List Type:
   * - **mobile**: Mobile number blacklist
   * - **ip**: IP blacklist
   * - **identifyNum**: ID number blacklist
   * - **bankCard**: Bank card blacklist
   * 
   * @example
   * ip
   */
  bizKey?: string;
  /**
   * @remarks
   * Rule ID:
   * - **Empty**: Add a new rule
   * - **Non-empty**: Modify an existing rule
   * 
   * @example
   * 38
   */
  id?: number;
  /**
   * @remarks
   * Product Name:
   * - **id2meta**: ID card two-factor verification
   * - **mobile3Meta**: Mobile number factor verification
   * - **bankcardMeta**: Bank card factor verification
   * 
   * @example
   * id2meta
   */
  productName?: string;
  /**
   * @remarks
   * Verification Status:
   * - **1**: Verification passed
   * - **2**: Verification failed
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
   * Blacklist rule.
   */
  blackListStrategy?: ModifyBlackListStrategyRequestBlackListStrategy;
  /**
   * @remarks
   * Region ID
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

