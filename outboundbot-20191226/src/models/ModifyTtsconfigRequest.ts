// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTTSConfigRequest extends $dara.Model {
  /**
   * @example
   * 99****Aw
   */
  appKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 27244bae-e446-4811-bb1d-f8a07b525af0
   */
  instanceId?: string;
  /**
   * @example
   * Managed
   */
  nlsServiceType?: string;
  /**
   * @remarks
   * 语调 [-500,500]之间整数。默认值为0。
   * 
   * 大于0表示升高音高。
   * 
   * 小于0表示降低音高。
   */
  pitchRate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1f1a2ba0-b3e7-4ff9-baf1-6dc8aeac0791
   */
  scriptId?: string;
  speechRate?: string;
  voice?: string;
  /**
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

