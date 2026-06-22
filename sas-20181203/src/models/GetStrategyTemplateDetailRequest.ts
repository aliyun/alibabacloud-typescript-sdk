// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStrategyTemplateDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the rule template.
   * >You can call the [GetOpaStrategyTemplateSummary](~~GetOpaStrategyTemplateSummary~~) operation to obtain this parameter.
   * 
   * @example
   * 2
   */
  strategyId?: number;
  static names(): { [key: string]: string } {
    return {
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

