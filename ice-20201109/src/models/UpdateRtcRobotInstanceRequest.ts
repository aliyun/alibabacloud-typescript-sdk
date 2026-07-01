// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRtcRobotInstanceRequestConfig extends $dara.Model {
  /**
   * @remarks
   * Controls whether voice interrupt is enabled. This change takes effect immediately.
   * 
   * @example
   * false
   */
  enableVoiceInterrupt?: boolean;
  /**
   * @remarks
   * The greeting message. The greeting is not updated if it has already been played.
   * 
   * @example
   * Hello
   */
  greeting?: string;
  /**
   * @remarks
   * The ID of the voice. The new voice takes effect on the AI Agent\\"s next utterance.
   * 
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

export class UpdateRtcRobotInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration for the AI Agent instance.
   */
  config?: UpdateRtcRobotInstanceRequestConfig;
  /**
   * @remarks
   * The ID of the AI Agent instance to update.
   * 
   * This parameter is required.
   * 
   * @example
   * 727dc0e296014bb58670940a3da95592
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: UpdateRtcRobotInstanceRequestConfig,
      instanceId: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

