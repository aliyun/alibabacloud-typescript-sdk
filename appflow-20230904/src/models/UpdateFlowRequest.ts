// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFlowRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the connection flow is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The description of the connection flow.
   * 
   * @example
   * 新建流程
   */
  flowDesc?: string;
  /**
   * @remarks
   * The ID of the connection flow.
   * 
   * This parameter is required.
   * 
   * @example
   * flow-15550241a1e942c29835
   */
  flowId?: string;
  /**
   * @remarks
   * The name of the connection flow.
   * 
   * @example
   * 新建流程
   */
  flowName?: string;
  /**
   * @remarks
   * The template of the connection flow.
   * 
   * @example
   * {
   *   "FormatVersion": "appflow-2025-07-01",
   *   "Nodes": [
   * 
   *      ]
   * }
   */
  flowTemplate?: string;
  /**
   * @remarks
   * The version of the connection flow.
   * 
   * @example
   * 9
   */
  flowVersion?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      flowDesc: 'FlowDesc',
      flowId: 'FlowId',
      flowName: 'FlowName',
      flowTemplate: 'FlowTemplate',
      flowVersion: 'FlowVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      flowDesc: 'string',
      flowId: 'string',
      flowName: 'string',
      flowTemplate: 'string',
      flowVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

