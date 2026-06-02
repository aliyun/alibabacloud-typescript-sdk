// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LaunchFlowRequest extends $dara.Model {
  flowDesc?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * flow-6a3acc07d51541b0b836
   */
  flowId?: string;
  flowName?: string;
  /**
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
   * @example
   * 1
   */
  flowVersion?: number;
  static names(): { [key: string]: string } {
    return {
      flowDesc: 'FlowDesc',
      flowId: 'FlowId',
      flowName: 'FlowName',
      flowTemplate: 'FlowTemplate',
      flowVersion: 'FlowVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowDesc: 'string',
      flowId: 'string',
      flowName: 'string',
      flowTemplate: 'string',
      flowVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

