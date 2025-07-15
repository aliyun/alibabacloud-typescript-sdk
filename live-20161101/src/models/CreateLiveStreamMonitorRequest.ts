// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveStreamMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application that plays the output streams of the monitoring session.
   * 
   * You can specify a name. If you do not specify a name, the system uses **monitor** as the name of the application.
   * 
   * @example
   * monitor****
   */
  app?: string;
  /**
   * @remarks
   * Supports input of callback addresses in HTTP(S) format.
   * 
   * @example
   * http://guide.aliyundoc.com/notify
   */
  callbackUrl?: string;
  /**
   * @remarks
   * DingTalk alert monitoring sends alert notifications through a DingTalk group robot. Please set up the DingTalk group robot first and enter the HTTP(S) address of the robot here. For more details, see [Custom Robot Access](https://open.dingtalk.com/document/robots/custom-robot-access).
   * > Configure the custom keyword for the DingTalk group robot as \\"alert\\", otherwise, messages will not be received.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=7a7d404056eee1f2fd944ace9bcfc361dc6448583e1d3d3baa****
   */
  dingTalkWebHookUrl?: string;
  /**
   * @remarks
   * The endpoint of the monitoring session.
   * 
   * This parameter is required.
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
   * Alarm threshold setting for monitoring, in JSON format. For more details, please refer to the table below for MonitorConfig.
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
   * The output template of the monitoring session. Valid values:
   * 
   * *   **lp_ld**: low definition.
   * *   **lp_sd**: standard definition.
   * *   **lp_hd**: high definition.
   * *   **lp_ud**: ultra high definition.
   * 
   * This parameter is required.
   * 
   * @example
   * lp_ud
   */
  outputTemplate?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The name of the output stream of the monitoring session. If you do not specify a name, the system generates a name at random.
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

