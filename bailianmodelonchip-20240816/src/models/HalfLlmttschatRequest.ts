// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HalfLLMTTSChatRequest extends $dara.Model {
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
   * @example
   * .pcm。
   */
  format?: string;
  /**
   * @example
   * qwen-max
   */
  model?: string;
  /**
   * @example
   * 0
   */
  pitchRate?: number;
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
   * 16000
   */
  sampleRate?: number;
  /**
   * @example
   * 0sIRZDNncmCfBagzy534x2PH
   */
  sessionId?: string;
  /**
   * @example
   * 0
   */
  speechRate?: number;
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
   * 661708759700322
   */
  tenantId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  text?: string;
  /**
   * @example
   * wss://nls-gateway-cn-beijing.aliyuncs.com/ws/v1
   */
  url?: string;
  /**
   * @example
   * siyue
   */
  voice?: string;
  /**
   * @example
   * 50
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'deviceName',
      enableSearch: 'enableSearch',
      format: 'format',
      model: 'model',
      pitchRate: 'pitchRate',
      productKey: 'productKey',
      prompt: 'prompt',
      sampleRate: 'sampleRate',
      sessionId: 'sessionId',
      speechRate: 'speechRate',
      stream: 'stream',
      tenantId: 'tenantId',
      text: 'text',
      url: 'url',
      voice: 'voice',
      volume: 'volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      enableSearch: 'boolean',
      format: 'string',
      model: 'string',
      pitchRate: 'number',
      productKey: 'string',
      prompt: 'string',
      sampleRate: 'number',
      sessionId: 'string',
      speechRate: 'number',
      stream: 'boolean',
      tenantId: 'string',
      text: 'string',
      url: 'string',
      voice: 'string',
      volume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

