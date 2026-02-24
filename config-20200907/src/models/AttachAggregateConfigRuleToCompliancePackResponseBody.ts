// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList extends $dara.Model {
  configRuleId?: string;
  errorCode?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      errorCode: 'ErrorCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      errorCode: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResult extends $dara.Model {
  operateRuleItemList?: AttachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList[];
  static names(): { [key: string]: string } {
    return {
      operateRuleItemList: 'OperateRuleItemList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleItemList: { 'type': 'array', 'itemType': AttachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResultOperateRuleItemList },
    };
  }

  validate() {
    if(Array.isArray(this.operateRuleItemList)) {
      $dara.Model.validateArray(this.operateRuleItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachAggregateConfigRuleToCompliancePackResponseBody extends $dara.Model {
  operateRuleResult?: AttachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operateRuleResult: 'OperateRuleResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateRuleResult: AttachAggregateConfigRuleToCompliancePackResponseBodyOperateRuleResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.operateRuleResult && typeof (this.operateRuleResult as any).validate === 'function') {
      (this.operateRuleResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

