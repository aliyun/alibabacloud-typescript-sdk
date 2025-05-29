// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HalfLLMImageChatRequest extends $dara.Model {
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
   * false
   */
  enableSearch?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://xxx/xx.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  inputText?: string;
  /**
   * @example
   * qwen-vl-max
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
      imageUrl: 'imageUrl',
      inputText: 'inputText',
      model: 'model',
      productKey: 'productKey',
      prompt: 'prompt',
      sessionId: 'sessionId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      enableSearch: 'boolean',
      imageUrl: 'string',
      inputText: 'string',
      model: 'string',
      productKey: 'string',
      prompt: 'string',
      sessionId: 'string',
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

