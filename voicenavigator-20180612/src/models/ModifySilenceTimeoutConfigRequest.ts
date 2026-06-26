// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySilenceTimeoutConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Action After Prompt
   * 
   * This parameter is required.
   * 
   * @example
   * TransferToAgent
   */
  finalAction?: string;
  /**
   * @remarks
   * Parameters for the post-prompt action, specified in a JSON string.
   * 
   * @example
   * {}
   */
  finalActionParams?: string;
  /**
   * @remarks
   * The prompt that plays after the silence timeout threshold is reached.
   * 
   * This parameter is required.
   * 
   * @example
   * 再见
   */
  finalPrompt?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12f407b22cbe4890ac595f09985848d5
   */
  instanceId?: string;
  /**
   * @remarks
   * The intent trigger for the silence timeout.
   * 
   * @example
   * Timeout
   */
  intentTrigger?: string;
  /**
   * @remarks
   * The prompt that plays when the system detects no user input during the specified timeout period.
   * 
   * This parameter is required.
   * 
   * @example
   * 不好意思，听不见您说什么
   */
  prompt?: string;
  /**
   * @remarks
   * The type of source that triggers the action.
   * 
   * This parameter is required.
   * 
   * @example
   * chatbotIntent
   */
  sourceType?: string;
  /**
   * @remarks
   * The maximum number of times the system plays the silence timeout prompt before it performs the post-prompt action.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  threshold?: number;
  /**
   * @remarks
   * The duration of the silence timeout, in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      finalAction: 'FinalAction',
      finalActionParams: 'FinalActionParams',
      finalPrompt: 'FinalPrompt',
      instanceId: 'InstanceId',
      intentTrigger: 'IntentTrigger',
      prompt: 'Prompt',
      sourceType: 'SourceType',
      threshold: 'Threshold',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finalAction: 'string',
      finalActionParams: 'string',
      finalPrompt: 'string',
      instanceId: 'string',
      intentTrigger: 'string',
      prompt: 'string',
      sourceType: 'string',
      threshold: 'number',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

