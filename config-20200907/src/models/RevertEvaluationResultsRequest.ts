// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RevertEvaluationResultsRequestResources } from "./RevertEvaluationResultsRequestResources";


export class RevertEvaluationResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * For more information about how to obtain the ID of a rule, see [ListConfigRules](https://help.aliyun.com/document_detail/169607.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cr-7e72626622af0051****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The resources that are to be re-evaluated.
   * 
   * This parameter is required.
   */
  resources?: RevertEvaluationResultsRequestResources[];
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      resources: { 'type': 'array', 'itemType': RevertEvaluationResultsRequestResources },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

