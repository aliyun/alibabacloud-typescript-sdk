// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRtcCloudTranscodeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application to which the channel belongs. The ID can contain uppercase letters, lowercase letters, digits, underscores (_), and hyphens (-). The maximum length is 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * ********-7074-****-9ef5-85c19a4*****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the channel to which the user to be transcoded belongs. The ID can contain uppercase letters, lowercase letters, digits, underscores (_), and hyphens (-). The maximum length is 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * myChannel
   */
  channelId?: string;
  /**
   * @remarks
   * The parameters for the input stream subscription.
   * 
   * This parameter is required.
   */
  inputParamShrink?: string;
  /**
   * @remarks
   * The idle timeout period in seconds. If a task cannot subscribe to the specified streamer\\"s stream and remains idle for longer than this period, the task automatically stops. The value must be an integer from 10 to 14,400. The default value is 300.
   * 
   * @example
   * 600
   */
  maxIdleTime?: number;
  /**
   * @remarks
   * The parameters for the transcoded output.
   * 
   * This parameter is required.
   */
  outputParamsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      inputParamShrink: 'InputParam',
      maxIdleTime: 'MaxIdleTime',
      outputParamsShrink: 'OutputParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      inputParamShrink: 'string',
      maxIdleTime: 'number',
      outputParamsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

