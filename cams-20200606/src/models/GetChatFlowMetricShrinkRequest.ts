// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatFlowMetricShrinkRequest extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  bizCode?: string;
  bizExtendShrink?: string;
  /**
   * @example
   * 示例值示例值
   */
  flowCode?: string;
  /**
   * @example
   * 示例值示例值
   */
  flowVersion?: string;
  /**
   * @example
   * 31
   */
  from?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  metricName?: string;
  metricParamShrink?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 81
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      bizExtendShrink: 'BizExtend',
      flowCode: 'FlowCode',
      flowVersion: 'FlowVersion',
      from: 'From',
      metricName: 'MetricName',
      metricParamShrink: 'MetricParam',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      bizExtendShrink: 'string',
      flowCode: 'string',
      flowVersion: 'string',
      from: 'number',
      metricName: 'string',
      metricParamShrink: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

