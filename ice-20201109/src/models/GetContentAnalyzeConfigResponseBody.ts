// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContentAnalyzeConfigResponseBodyContentAnalyzeConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  auto?: boolean;
  /**
   * @example
   * TEXT,FACE
   */
  saveType?: string;
  /**
   * @example
   * S00000101-100070
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      auto: 'Auto',
      saveType: 'SaveType',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auto: 'boolean',
      saveType: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContentAnalyzeConfigResponseBody extends $dara.Model {
  contentAnalyzeConfig?: GetContentAnalyzeConfigResponseBodyContentAnalyzeConfig;
  /**
   * @example
   * 31FEC819-2344-5771-9366-9172DB0D26C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      contentAnalyzeConfig: 'ContentAnalyzeConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentAnalyzeConfig: GetContentAnalyzeConfigResponseBodyContentAnalyzeConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.contentAnalyzeConfig && typeof (this.contentAnalyzeConfig as any).validate === 'function') {
      (this.contentAnalyzeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

