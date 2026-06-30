// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GraphFlowNode } from "./GraphFlowNode";


export class TaskGraphFlow extends $dara.Model {
  /**
   * @remarks
   * Flow scoring logic settings
   * 
   * @example
   * 1
   */
  flowRuleScoreType?: number;
  /**
   * @remarks
   * Canvas ID of the flow
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * All nodes in the flow
   */
  nodes?: GraphFlowNode[];
  /**
   * @remarks
   * Rule ID
   * 
   * @example
   * 1
   */
  rid?: number;
  /**
   * @remarks
   * Rule Name
   * 
   * @example
   * 违规
   */
  ruleName?: string;
  /**
   * @remarks
   * Used for frontend display
   * 
   * @example
   * {}
   */
  showProperties?: string;
  /**
   * @remarks
   * Skip if the first session node is not hit
   * 
   * @example
   * true
   */
  skipWhenFirstSessionNodeMiss?: boolean;
  static names(): { [key: string]: string } {
    return {
      flowRuleScoreType: 'FlowRuleScoreType',
      id: 'Id',
      nodes: 'Nodes',
      rid: 'Rid',
      ruleName: 'RuleName',
      showProperties: 'ShowProperties',
      skipWhenFirstSessionNodeMiss: 'SkipWhenFirstSessionNodeMiss',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowRuleScoreType: 'number',
      id: 'number',
      nodes: { 'type': 'array', 'itemType': GraphFlowNode },
      rid: 'number',
      ruleName: 'string',
      showProperties: 'string',
      skipWhenFirstSessionNodeMiss: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

