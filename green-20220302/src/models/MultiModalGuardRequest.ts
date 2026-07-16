// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultiModalGuardRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the moderation service. Valid values:
   * 
   * - query_security_check: AI input content moderation.
   * 
   * - response_security_check: AI-generated content moderation.
   * 
   * @example
   * query_security_check_pro
   */
  service?: string;
  /**
   * @remarks
   * The set of parameters required for the moderation service. The value must be a JSON string.
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
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

