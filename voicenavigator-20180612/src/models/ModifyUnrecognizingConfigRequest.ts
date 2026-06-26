// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUnrecognizingConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The rejection action performed after the final rejection prompt is played.
   * 
   * This parameter is required.
   * 
   * @example
   * TransferToAgent
   */
  finalAction?: string;
  /**
   * @remarks
   * The action parameters for the rejection action, in JSON format.
   * 
   * @example
   * {}
   */
  finalActionParams?: string;
  /**
   * @remarks
   * The final rejection prompt. The service plays this prompt when the rejection threshold is met.
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
   * The rejection prompt played when the service fails to recognize user input.
   * 
   * This parameter is required.
   * 
   * @example
   * 我不理解您的意思，请再说一遍
   */
  prompt?: string;
  /**
   * @remarks
   * The rejection threshold. The maximum number of consecutive rejections before the service triggers the rejection action.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      finalAction: 'FinalAction',
      finalActionParams: 'FinalActionParams',
      finalPrompt: 'FinalPrompt',
      instanceId: 'InstanceId',
      prompt: 'Prompt',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finalAction: 'string',
      finalActionParams: 'string',
      finalPrompt: 'string',
      instanceId: 'string',
      prompt: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

