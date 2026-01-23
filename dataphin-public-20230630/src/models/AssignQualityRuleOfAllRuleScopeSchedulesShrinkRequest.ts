// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignQualityRuleOfAllRuleScopeSchedulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  assignCommandShrink?: string;
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
      assignCommandShrink: 'AssignCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

