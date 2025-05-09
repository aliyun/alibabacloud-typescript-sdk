// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableDesignProjectFlowResponseBodyProjectFlowFlowNodeArray extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the ticket can be returned to the schema design node. Valid values:
   * 
   * *   **1**: The ticket can be returned to the schema design node.
   * *   **0**: The ticket cannot be returned to the schema design node. This value can be returned only for the PUBLISH node.
   * 
   * @example
   * 1
   */
  backToDesign?: boolean;
  /**
   * @remarks
   * Indicates whether the current node can be skipped. Valid values:
   * 
   * *   **1**: The current node can be skipped.
   * *   **0**: The current node cannot be skipped. This value can be returned only for the PUBLISH node.
   * 
   * @example
   * 0
   */
  canSkip?: boolean;
  /**
   * @remarks
   * The role of the node in the process.
   * 
   * *   START: The ticket was created.
   * *   DESIGN: The schema is being created.
   * *   PUBLISH: The schema is published.
   * *   END: The ticket is complete.
   * 
   * @example
   * DESIGN
   */
  nodeRole?: string;
  /**
   * @remarks
   * The title of the node.
   */
  nodeTitle?: string;
  /**
   * @remarks
   * The position of the node in the process. The value starts from 1.
   * 
   * @example
   * 1
   */
  position?: number;
  /**
   * @remarks
   * Indicates whether the node is the anchor node. A schema design process has only one anchor node, on which the schema is published. After the schema is published on the anchor node, a post-publish image is generated and the DDL metadata lock is released.
   * 
   * @example
   * false
   */
  publishAnchor?: boolean;
  /**
   * @remarks
   * The available publishing strategies.
   */
  publishStrategies?: string[];
  static names(): { [key: string]: string } {
    return {
      backToDesign: 'BackToDesign',
      canSkip: 'CanSkip',
      nodeRole: 'NodeRole',
      nodeTitle: 'NodeTitle',
      position: 'Position',
      publishAnchor: 'PublishAnchor',
      publishStrategies: 'PublishStrategies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backToDesign: 'boolean',
      canSkip: 'boolean',
      nodeRole: 'string',
      nodeTitle: 'string',
      position: 'number',
      publishAnchor: 'boolean',
      publishStrategies: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.publishStrategies)) {
      $dara.Model.validateArray(this.publishStrategies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

