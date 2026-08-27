// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUnrecognizingConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The rejection action.
   * 
   * This parameter is required.
   * 
   * @example
   * TransferToAgent
   */
  finalAction?: string;
  /**
   * @remarks
   * The action parameters.
   * 
   * @example
   * {}
   */
  finalActionParams?: string;
  /**
   * @remarks
   * The final rejection prompt.
   * 
   * This parameter is required.
   * 
   * @example
   * Goodbye
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
   * The rejection prompt.
   * 
   * This parameter is required.
   * 
   * @example
   * I don\\"t understand what you mean, please say it again
   */
  prompt?: string;
  /**
   * @remarks
   * The maximum number of rejections.
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

