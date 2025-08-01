// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatFlowMetricShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Business tenant code, default is “ALICOM_OPAAS”.
   * 
   * @example
   * ALICOM_OPAAS
   */
  bizCode?: string;
  /**
   * @remarks
   * Business extension information, default is “{}”.
   * 
   * @example
   * {}
   */
  bizExtendShrink?: string;
  /**
   * @remarks
   * Flow code.
   * 
   * @example
   * f4912c16943b4dfba44bd6fedacf****
   */
  flowCode?: string;
  /**
   * @remarks
   * Flow version.
   * 
   * @example
   * 1
   */
  flowVersion?: string;
  /**
   * @remarks
   * Start timestamp in seconds.
   * 
   * @example
   * 1751299200
   */
  from?: number;
  /**
   * @remarks
   * Metric name.
   * 
   * This parameter is required.
   * 
   * @example
   * nodeUsageStatistics
   */
  metricName?: string;
  metricParamShrink?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * End timestamp in seconds.
   * 
   * @example
   * 1751385599
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

