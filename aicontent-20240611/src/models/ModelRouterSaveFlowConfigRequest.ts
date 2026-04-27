// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterSaveFlowConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 607
   */
  modelId?: number;
  /**
   * @example
   * 100
   */
  rpm?: number;
  /**
   * @example
   * true
   */
  smoothFlowEnabled?: boolean;
  /**
   * @example
   * 10000
   */
  tpm?: number;
  static names(): { [key: string]: string } {
    return {
      modelId: 'modelId',
      rpm: 'rpm',
      smoothFlowEnabled: 'smoothFlowEnabled',
      tpm: 'tpm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'number',
      rpm: 'number',
      smoothFlowEnabled: 'boolean',
      tpm: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

