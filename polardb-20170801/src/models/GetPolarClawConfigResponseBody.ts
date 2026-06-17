// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolarClawConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The configuration object.
   * 
   * @example
   * {
   *     "models": "{\\"mode\\":\\"merge\\",\\"providers\\":{\\"bailian\\":{\\"models\\":[{\\"input\\":[\\"text\\",\\"image\\"],\\"name\\":\\"qwen3.6-plus\\",\\"api\\":\\"openai-completions\\",\\"id\\":\\"qwen3.6-plus\\",\\"compat\\":{\\"supportsUsageInStreaming\\":true}}],\\"baseUrl\\":\\"https://dashscope.aliyuncs.com/compatible-mode/v1\\",\\"apiKey\\":\\"__OPENCLAW_REDACTED__\\",\\"api\\":\\"openai-completions\\"},\\"polardbCustom\\":{\\"models\\":[{\\"name\\":\\"qwen3-max\\",\\"api\\":\\"openai-completions\\",\\"id\\":\\"qwen3-max\\"}],\\"baseUrl\\":\\"https://dashscope.aliyuncs.com/compatible-mode/v1\\",\\"apiKey\\":\\"__OPENCLAW_REDACTED__\\",\\"api\\":\\"openai-completions\\"},\\"polardb\\":{\\"models\\":[],\\"baseUrl\\":\\"https://dashscope.aliyuncs.com/compatible-mode/v1\\",\\"api\\":\\"openai-completions\\"}}}"
   * }
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The configuration hash.
   * 
   * @example
   * 005b55a8e870aaf866598e48a6af0bdbfa3fef704770c5e1cbad99648beaa661
   */
  hash?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The version of OpenClaw.
   * 
   * @example
   * 2026.3.28
   */
  openclawVersion?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CD3FA5F3-FAF3-44CA-AFFF-BAF869******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      code: 'Code',
      config: 'Config',
      hash: 'Hash',
      message: 'Message',
      openclawVersion: 'OpenclawVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      code: 'number',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      hash: 'string',
      message: 'string',
      openclawVersion: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

