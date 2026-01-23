// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateQualityRuleSwitchRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  open?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      open: 'Open',
      ruleIdList: 'RuleIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      open: 'boolean',
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

export class UpdateQualityRuleSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommand?: UpdateQualityRuleSwitchRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateQualityRuleSwitchRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

