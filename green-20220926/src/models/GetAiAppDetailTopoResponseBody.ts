// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiAppDetailTopoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The node category.
   * 
   * - LLM
   * 
   * - Knowledge
   * 
   * - Tools
   * 
   * - Others
   * 
   * @example
   * LLM
   */
  nodeCategory?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * idxxx
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * namexxx
   */
  nodeName?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * - **APP**: end-to-end agent.
   * - **MODEL**: large language model.
   * - **TOOL**: tool.
   * 
   * @example
   * TOOL
   */
  nodeType?: string;
  /**
   * @remarks
   * The request count.
   * 
   * @example
   * 100
   */
  requestCount?: number;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The number of alerts.
   * 
   * @example
   * 20
   */
  warningCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodeCategory: 'NodeCategory',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeType: 'NodeType',
      requestCount: 'RequestCount',
      riskLevel: 'RiskLevel',
      warningCount: 'WarningCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeCategory: 'string',
      nodeId: 'string',
      nodeName: 'string',
      nodeType: 'string',
      requestCount: 'number',
      riskLevel: 'string',
      warningCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiAppDetailTopoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetAiAppDetailTopoResponseBodyData[];
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetAiAppDetailTopoResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

