// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LaunchFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the flow.
   * 
   * @example
   * 公司管理群内定期消息提醒
   */
  flowDesc?: string;
  /**
   * @remarks
   * The ID of the flow.
   * 
   * This parameter is required.
   * 
   * @example
   * flow-6a3acc07d51541b0b836
   */
  flowId?: string;
  /**
   * @remarks
   * The name of the flow.
   * 
   * @example
   * 通过飞书使用OpenClaw——多模态
   */
  flowName?: string;
  /**
   * @remarks
   * The template of the flow.
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
   * The version of the flow.
   * 
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

