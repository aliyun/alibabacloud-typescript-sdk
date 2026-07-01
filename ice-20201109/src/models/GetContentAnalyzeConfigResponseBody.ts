// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContentAnalyzeConfigResponseBodyContentAnalyzeConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies if Intelligent Content Analysis starts automatically after a Media Asset is registered.
   * 
   * Valid values:
   * 
   * - `true`: Enabled.
   * 
   * - `false`: Disabled. (default)
   * 
   * @example
   * true
   */
  auto?: boolean;
  /**
   * @remarks
   * The repository type for saving analysis results. This parameter is valid only when `Auto` is set to `true`. The default is an empty string.
   * 
   * - `TEXT`: Label
   * 
   * - `FACE`: Face
   * 
   * - `DNA`: Image DNA
   * 
   * You can specify multiple values, separated by commas (,). If this parameter is left empty, the analysis results are not saved to any search repository and cannot be used for content search.
   * 
   * @example
   * TEXT,FACE
   */
  saveType?: string;
  /**
   * @remarks
   * The ID of the Intelligent Content Analysis template. Each template includes the following AI capabilities:
   * 
   * - `S00000101-100040`: Text Recognition
   * 
   * - `S00000101-100060`: Video Classification and Face Recognition
   * 
   * - `S00000101-100070`: Text Recognition, Video Classification, and Face Recognition
   * 
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
  /**
   * @remarks
   * The configuration for Intelligent Content Analysis.
   */
  contentAnalyzeConfig?: GetContentAnalyzeConfigResponseBodyContentAnalyzeConfig;
  /**
   * @remarks
   * The request ID.
   * 
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

