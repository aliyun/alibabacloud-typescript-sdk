// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveStreamMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the output stream of the monitoring session belongs. You can specify a name. If you do not specify a name, the system uses **monitor** as the name of the application.
   * 
   * @example
   * monitor****
   */
  app?: string;
  /**
   * @remarks
   * The callback URL. Supported formats include HTTP and HTTPS.
   * 
   * @example
   * http://guide.aliyundoc.com/notify
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The URL of the DingTalk chatbot. Specify a DingTalk chatbot that you have configured, and you can receive live monitoring alerts from the chatbot. For more information, see [Configure a custom chatbot](https://open.dingtalk.com/document/robots/custom-robot-access).
   * 
   * >  Specify "Alert" as the custom keyword of the DingTalk chatbot. Otherwise, you cannot receive messages.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=7a7d404056eee1f2fd944ace9bcfc361dc6448583e1d3d3baa****
   */
  dingTalkWebHookUrl?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The list of input streams to monitor. For more information, see the following **InputConfig** table.
   * 
   * This parameter is required.
   * 
   * @example
   * InputConfig
   */
  inputList?: string;
  /**
   * @remarks
   * The monitoring alert thresholds. The value is a JSON string. For more information, see the following MonitorConfig table.
   * 
   * @example
   * "{\\"fpsLowThres\\": 0.6,\\"brLowThres\\": 1.1,\\"eofDurationThresSec\\": 10}"
   */
  monitorConfig?: string;
  /**
   * @remarks
   * The ID of the monitoring session.
   * 
   * >  You can obtain the monitoring session ID from the response of the [CreateLiveStreamMonitor](https://help.aliyun.com/document_detail/2848129.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  monitorId?: string;
  /**
   * @remarks
   * The name of the monitoring session.
   * 
   * @example
   * liveMonitor****
   */
  monitorName?: string;
  /**
   * @remarks
   * The output template of the monitoring session. Valid values:
   * 
   * *   **lp_ld**: low definition
   * *   **lp_sd**: standard definition
   * *   **lp_hd**: high definition
   * *   **lp_ud**: ultra-high definition
   * 
   * @example
   * lp_ud
   */
  outputTemplate?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The name of the output stream of the monitoring session.
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
      monitorId: 'MonitorId',
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
      monitorId: 'string',
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

