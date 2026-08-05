// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveStreamMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The application name for the output stream of the monitoring session. You can specify a custom name. If you do not specify this parameter, **monitor** is used as the application name.
   * 
   * @example
   * monitor****
   */
  app?: string;
  /**
   * @remarks
   * The webhook address. HTTP and HTTPS are supported.
   * 
   * @example
   * http://guide.aliyundoc.com/notify
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The webhook URL of the DingTalk chatbot. To receive alert notifications, configure a DingTalk chatbot and enter its webhook URL, which can be in HTTP or HTTPS format. For more information, see [Custom robot access](https://open.dingtalk.com/document/robots/custom-robot-access).
   * 
   * > Set the custom keyword for the DingTalk chatbot to "Alerting". Otherwise, you cannot receive messages.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=7a7d404056eee1f2fd944ace9bcfc361dc6448583e1d3d3baa****
   */
  dingTalkWebHookUrl?: string;
  /**
   * @remarks
   * The domain name to monitor.
   * 
   * This parameter is required.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The list of input streams to monitor. For more information, see the **InputConfig** table below.
   * 
   * This parameter is required.
   * 
   * @example
   * InputConfig
   */
  inputList?: string;
  /**
   * @remarks
   * The alert threshold settings for monitoring. The value must be a JSON string. For more information, see the MonitorConfig table below.
   * 
   * @example
   * "{\\"fpsLowThres\\": 0.6,\\"brLowThres\\": 1.1,\\"eofDurationThresSec\\": 10}"
   */
  monitorConfig?: string;
  /**
   * @remarks
   * The name of the monitoring session.
   * 
   * This parameter is required.
   * 
   * @example
   * liveMonitor****
   */
  monitorName?: string;
  /**
   * @remarks
   * The output template for the monitoring session. Valid values:
   * 
   * - **lp_ld**: low definition.
   * 
   * - **lp_sd**: standard definition.
   * 
   * - **lp_hd**: high definition.
   * 
   * - **lp_ud**: ultra-high definition.
   * 
   * This parameter is required.
   * 
   * @example
   * lp_ud
   */
  outputTemplate?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the output stream for the monitoring session. If you do not specify this parameter, the system generates a random name.
   * 
   * @example
   * monitorStream****
   */
  stream?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      callbackUrl: 'CallbackUrl',
      dingTalkWebHookUrl: 'DingTalkWebHookUrl',
      domain: 'Domain',
      inputList: 'InputList',
      monitorConfig: 'MonitorConfig',
      monitorName: 'MonitorName',
      outputTemplate: 'OutputTemplate',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      callbackUrl: 'string',
      dingTalkWebHookUrl: 'string',
      domain: 'string',
      inputList: 'string',
      monitorConfig: 'string',
      monitorName: 'string',
      outputTemplate: 'string',
      ownerId: 'number',
      regionId: 'string',
      stream: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

