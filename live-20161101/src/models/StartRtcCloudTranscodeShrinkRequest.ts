// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRtcCloudTranscodeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ********-7074-****-9ef5-85c19a4*****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * myChannel
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  inputParamShrink?: string;
  /**
   * @example
   * 600
   */
  maxIdleTime?: number;
  /**
   * @remarks
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

