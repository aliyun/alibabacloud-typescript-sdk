// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CostCenterQueryResponseBodyModuleEntityDOS } from "./CostCenterQueryResponseBodyModuleEntityDos";


export class CostCenterQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * a@alipay.com
   */
  alipayNo?: string;
  /**
   * @example
   * ding12345678
   */
  corpId?: string;
  disable?: number;
  entityDOS?: CostCenterQueryResponseBodyModuleEntityDOS[];
  /**
   * @example
   * 7232
   */
  id?: number;
  /**
   * @example
   * 123456
   */
  number?: string;
  /**
   * @remarks
   * rule code
   * 
   * @example
   * 500578154
   */
  ruleCode?: number;
  /**
   * @example
   * 1
   */
  scope?: number;
  /**
   * @example
   * 1
   */
  thirdpartId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      alipayNo: 'alipay_no',
      corpId: 'corp_id',
      disable: 'disable',
      entityDOS: 'entity_d_o_s',
      id: 'id',
      number: 'number',
      ruleCode: 'rule_code',
      scope: 'scope',
      thirdpartId: 'thirdpart_id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alipayNo: 'string',
      corpId: 'string',
      disable: 'number',
      entityDOS: { 'type': 'array', 'itemType': CostCenterQueryResponseBodyModuleEntityDOS },
      id: 'number',
      number: 'string',
      ruleCode: 'number',
      scope: 'number',
      thirdpartId: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entityDOS)) {
      $dara.Model.validateArray(this.entityDOS);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

