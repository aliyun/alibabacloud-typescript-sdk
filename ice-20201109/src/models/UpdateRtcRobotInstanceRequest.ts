// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRtcRobotInstanceRequestConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether voice interruption is allowed. This setting takes effect immediately.
   * 
   * @example
   * false
   */
  enableVoiceInterrupt?: boolean;
  /**
   * @remarks
   * The greeting. Modifications do not take effect if the greeting has already been played.
   * 
   * @example
   * hello
   */
  greeting?: string;
  /**
   * @remarks
   * The voice ID. The change takes effect for the next sentence spoken by the agent.
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
   * The configuration.
   */
  config?: UpdateRtcRobotInstanceRequestConfig;
  /**
   * @remarks
   * The instance ID.
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

