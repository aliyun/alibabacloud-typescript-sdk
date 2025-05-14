// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendAIAgentSpeechRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the broadcast can interrupt the ongoing speech. Default value: true
   * 
   * @example
   * true
   */
  enableInterrupt?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      enableInterrupt: 'EnableInterrupt',
      instanceId: 'InstanceId',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableInterrupt: 'boolean',
      instanceId: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

