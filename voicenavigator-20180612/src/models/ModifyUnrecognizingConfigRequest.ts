// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUnrecognizingConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TransferToAgent
   */
  finalAction?: string;
  /**
   * @example
   * {}
   */
  finalActionParams?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  finalPrompt?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12f407b22cbe4890ac595f09985848d5
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  prompt?: string;
  /**
   * @remarks
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

