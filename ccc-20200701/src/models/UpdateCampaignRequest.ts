// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCampaignRequest extends $dara.Model {
  /**
   * @remarks
   * Callable time, supports multiple time segments.
   * 
   * @example
   * [
   *       {
   *             "beginTime": "09:00:00",
   *             "endTime": "12:00:00"
   *       }
   * ]
   */
  callableTime?: string;
  /**
   * @remarks
   * Predictive outbound campaign ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ab11908b-6ebc-4b0c-b51e-3e17c7060
   */
  campaignId?: string;
  /**
   * @remarks
   * Contact stream ID.
   * 
   * @example
   * 3a310f56-4d30-4081-ba24-5d87a3b7262e
   */
  contactFlowId?: string;
  /**
   * @remarks
   * End time, in Unix timestamp format, in milliseconds.
   * 
   * @example
   * 1689933600000
   */
  endTime?: string;
  /**
   * @remarks
   * Cloud Contact Center instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Predictive outbound campaign name.
   * 
   * @example
   * 云联络中心测试
   */
  name?: string;
  /**
   * @remarks
   * Start time, in Unix timestamp format, in milliseconds.
   * 
   * @example
   * 1689901200000
   */
  startTime?: string;
  /**
   * @remarks
   * Policy parameters.
   * 
   * @example
   * PACING策略，参考参数
   * {
   *       "ratio": 2
   * }
   * 
   * PID策略，参考参数
   * {
   *     "abandonRate":5,
   *     "historicalConnectedRate":45
   * }
   */
  strategyParameters?: string;
  static names(): { [key: string]: string } {
    return {
      callableTime: 'CallableTime',
      campaignId: 'CampaignId',
      contactFlowId: 'ContactFlowId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      name: 'Name',
      startTime: 'StartTime',
      strategyParameters: 'StrategyParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callableTime: 'string',
      campaignId: 'string',
      contactFlowId: 'string',
      endTime: 'string',
      instanceId: 'string',
      name: 'string',
      startTime: 'string',
      strategyParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

