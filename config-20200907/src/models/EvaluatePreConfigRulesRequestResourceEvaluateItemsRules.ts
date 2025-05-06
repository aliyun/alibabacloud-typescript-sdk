// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EvaluatePreConfigRulesRequestResourceEvaluateItemsRules extends $dara.Model {
  /**
   * @remarks
   * The identifier of the evaluation rule.
   * 
   * For more information about how to obtain the identifier of an evaluation rule, see [ListManagedRules](https://help.aliyun.com/document_detail/467810.html).
   * 
   * @example
   * ecs-instance-deletion-protection-enabled
   */
  identifier?: string;
  /**
   * @remarks
   * The input parameters of the evaluation rule.
   * 
   * @example
   * {}
   */
  inputParameters?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      inputParameters: 'InputParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      inputParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

