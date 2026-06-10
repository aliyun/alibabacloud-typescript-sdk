// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTTSConfigRequest extends $dara.Model {
  /**
   * @remarks
   * AppKey for your Intelligent Speech Interaction project. Required only when NlsServiceType is Authorized.
   * 
   * @example
   * 99****Aw
   */
  appKey?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * 27244bae-e446-4811-bb1d-f8a07b525af0
   */
  instanceId?: string;
  /**
   * @remarks
   * The service type.
   * Managed: The default public Intelligent Speech Interaction service for Outbound Bot.
   * Authorized: A private Intelligent Speech Interaction service that you have purchased. To grant authorization, navigate to Scenario Management > Edit > Call Service > Custom Service.
   * 
   * @example
   * Managed
   */
  nlsServiceType?: string;
  /**
   * @remarks
   * Pitch. An integer between -500 and 500. Default is 0.
   * 
   * A value greater than 0 raises pitch.
   * 
   * A value less than 0 lowers pitch.
   * 
   * @example
   * 0
   */
  pitchRate?: string;
  /**
   * @remarks
   * Scenario ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1f1a2ba0-b3e7-4ff9-baf1-6dc8aeac0791
   */
  scriptId?: string;
  /**
   * @remarks
   * Speech rate. An integer between -500 and 500. Default is 0.
   * 
   * A value greater than 0 increases speech speed.
   * 
   * A value less than 0 decreases speech speed.
   * 
   * @example
   * 0
   */
  speechRate?: string;
  /**
   * @remarks
   * Voice model, such as aixia, siyue, or xiaoyun
   * 
   * @example
   * aixia
   */
  voice?: string;
  /**
   * @remarks
   * Volume. An integer between 0 and 100. Default is 50.
   * 
   * A value greater than 50 increases volume.
   * 
   * A value less than 50 decreases volume.
   * 
   * @example
   * 100
   */
  volume?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      instanceId: 'InstanceId',
      nlsServiceType: 'NlsServiceType',
      pitchRate: 'PitchRate',
      scriptId: 'ScriptId',
      speechRate: 'SpeechRate',
      voice: 'Voice',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      instanceId: 'string',
      nlsServiceType: 'string',
      pitchRate: 'string',
      scriptId: 'string',
      speechRate: 'string',
      voice: 'string',
      volume: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

