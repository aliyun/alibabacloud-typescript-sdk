// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultiModalGuardWsRequest extends $dara.Model {
  /**
   * @remarks
   * The model type. Valid values:
   * 
   * - LLM
   * 
   * @example
   * LLM
   */
  modelType?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - OpenAI
   * - DashScope
   * - Anthropic
   * 
   * @example
   * DashScope
   */
  protocolType?: string;
  /**
   * @remarks
   * The moderation service category. Valid values:
   * 
   * - query_security_check_pro: AI input content security detection (pro edition).
   * - response_security_check_pro: AI-generated content security detection (pro edition).
   * - img_query_security_check: AIGC input image security detection.
   * - img_response_security_check: AIGC output image security detection.
   * - text_img_mix_guard: Multimodal (text + image) hybrid security detection.
   * - file_security_sync_check: AIGC input or output file security detection.
   * - text_file_sec_sync_check: Multimodal (text + file) real-time security detection.
   * 
   * @example
   * query_security_check_pro
   */
  service?: string;
  /**
   * @remarks
   * The parameter set required by the moderation service, in JSON string format. The input parameter for text content is content (String), the input parameter for image content is imageUrls (JSONArray), and the input parameter for file content is fileUrls (JSONArray).
   * 
   * @example
   * - 文本：
   * {
   *   "content": "test"
   * }
   * 
   * - 图片：
   * {
   *   "imageUrls": ["https://example.com/image.png"]
   * }
   * 
   * - 文件：
   * {
   *   "fileUrls": ["https://example.com/file.pdf"]
   * }
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      modelType: 'ModelType',
      protocolType: 'ProtocolType',
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelType: 'string',
      protocolType: 'string',
      service: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

