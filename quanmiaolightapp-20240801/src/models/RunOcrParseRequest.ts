// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunOcrParseRequest extends $dara.Model {
  /**
   * @example
   * oss://default/aimiaobi-service-prod/aimiaobi/temp/public/government_service_experience_feedback_summary.txt
   */
  fileKey?: string;
  modelId?: string;
  /**
   * @example
   * http://www.example.com/xxxx.txt
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      fileKey: 'fileKey',
      modelId: 'modelId',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileKey: 'string',
      modelId: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

