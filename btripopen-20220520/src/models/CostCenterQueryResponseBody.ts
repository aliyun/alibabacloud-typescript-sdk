// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CostCenterQueryResponseBodyModuleEntityDOS extends $dara.Model {
  /**
   * @example
   * ding1234567
   */
  corpId?: string;
  /**
   * @example
   * 12345
   */
  entityId?: string;
  /**
   * @example
   * 1
   */
  entityType?: string;
  /**
   * @example
   * default_bus
   */
  name?: string;
  /**
   * @example
   * 10
   */
  userNum?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corp_id',
      entityId: 'entity_id',
      entityType: 'entity_type',
      name: 'name',
      userNum: 'user_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      entityId: 'string',
      entityType: 'string',
      name: 'string',
      userNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class CostCenterQueryResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: CostCenterQueryResponseBodyModule[];
  /**
   * @example
   * true
   */
  morePage?: boolean;
  /**
   * @example
   * 407543AF-2BD9-5890-BD92-9D1AB7218B27
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 21041ce316577904808056433edbb2
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      morePage: 'more_page',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: { 'type': 'array', 'itemType': CostCenterQueryResponseBodyModule },
      morePage: 'boolean',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

