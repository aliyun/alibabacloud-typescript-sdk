// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterSaveFlowConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The model ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 607
   */
  modelId?: number;
  /**
   * @remarks
   * The maximum number of requests per minute (RPM).
   * 
   * @example
   * 100
   */
  rpm?: number;
  /**
   * @remarks
   * Specifies whether to enable smooth flow control.
   * 
   * @example
   * true
   */
  smoothFlowEnabled?: boolean;
  /**
   * @remarks
   * The maximum number of tokens per minute (TPM).
   * 
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

