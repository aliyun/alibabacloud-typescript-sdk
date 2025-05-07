// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GraphFlowNode } from "./GraphFlowNode";


export class TaskGraphFlow extends $dara.Model {
  flowRuleScoreType?: number;
  id?: number;
  nodes?: GraphFlowNode[];
  rid?: number;
  ruleName?: string;
  showProperties?: string;
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

