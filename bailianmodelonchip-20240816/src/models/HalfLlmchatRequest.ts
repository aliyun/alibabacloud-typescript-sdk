// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HalfLLMChatRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5b504f84b69b9a73d3a21a2cff05e190
   */
  deviceName?: string;
  /**
   * @example
   * true
   */
  enableSearch?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  inputText?: string;
  /**
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2oImhCz4f8XCviiM
   */
  productKey?: string;
  prompt?: string;
  /**
   * @example
   * 0sIRZDNncmCfBagzy534x2PH
   */
  sessionId?: string;
  /**
   * @example
   * true
   */
  stream?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520539530998273
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'deviceName',
      enableSearch: 'enableSearch',
      inputText: 'inputText',
      model: 'model',
      productKey: 'productKey',
      prompt: 'prompt',
      sessionId: 'sessionId',
      stream: 'stream',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      enableSearch: 'boolean',
      inputText: 'string',
      model: 'string',
      productKey: 'string',
      prompt: 'string',
      sessionId: 'string',
      stream: 'boolean',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

