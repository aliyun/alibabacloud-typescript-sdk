// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTableDesignProjectFlowResponseBodyProjectFlowFlowNodeArray } from "./GetTableDesignProjectFlowResponseBodyProjectFlowFlowNodeArray";


export class GetTableDesignProjectFlowResponseBodyProjectFlow extends $dara.Model {
  /**
   * @remarks
   * The position of the current node in the process.
   * 
   * @example
   * 2
   */
  currentPosition?: number;
  /**
   * @remarks
   * The nodes in the process.
   */
  flowNodeArray?: GetTableDesignProjectFlowResponseBodyProjectFlowFlowNodeArray[];
  /**
   * @remarks
   * The description of the security rule set that is applied to the schema design ticket.
   * 
   * @example
   * mysq_test
   */
  ruleComment?: string;
  /**
   * @remarks
   * The name of the security rule set that is applied to the schema design ticket.
   * 
   * @example
   * mysql default
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      currentPosition: 'CurrentPosition',
      flowNodeArray: 'FlowNodeArray',
      ruleComment: 'RuleComment',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPosition: 'number',
      flowNodeArray: { 'type': 'array', 'itemType': GetTableDesignProjectFlowResponseBodyProjectFlowFlowNodeArray },
      ruleComment: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flowNodeArray)) {
      $dara.Model.validateArray(this.flowNodeArray);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

