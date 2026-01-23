// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteQualityRulesRequestDeleteCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ruleIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      ruleIdList: 'RuleIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.ruleIdList)) {
      $dara.Model.validateArray(this.ruleIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQualityRulesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deleteCommand?: DeleteQualityRulesRequestDeleteCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      deleteCommand: 'DeleteCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteCommand: DeleteQualityRulesRequestDeleteCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.deleteCommand && typeof (this.deleteCommand as any).validate === 'function') {
      (this.deleteCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

