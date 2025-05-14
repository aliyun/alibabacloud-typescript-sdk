// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcRobotInstanceResponseBodyConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  enableVoiceInterrupt?: boolean;
  greeting?: string;
  /**
   * @example
   * zhixiaoxia
   */
  voiceId?: string;
  static names(): { [key: string]: string } {
    return {
      enableVoiceInterrupt: 'EnableVoiceInterrupt',
      greeting: 'Greeting',
      voiceId: 'VoiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableVoiceInterrupt: 'boolean',
      greeting: 'string',
      voiceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

