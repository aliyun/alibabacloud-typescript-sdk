// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetContentAnalyzeConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically initiate intelligent content analysis after media asset registration is complete.
   * 
   * Valid values:
   * - true: Enabled.
   * - false: Disabled. Default value: false.
   * 
   * @example
   * true
   */
  auto?: boolean;
  /**
   * @remarks
   * The type of library to which analysis results are saved. This parameter can be configured only when Auto is set to true. Default value: empty.
   * - TEXT: label
   * - FACE: face
   * - DNA: similar image
   * 
   * Multiple values are supported. Separate multiple values with commas (,). If this field is empty, the results of intelligent content analysis are not saved to any search library by default, and no content search of any form can be performed subsequently.
   * 
   * @example
   * TEXT,FACE
   */
  saveType?: string;
  /**
   * @remarks
   * The ID of the intelligent content analysis template. Each template includes the following AI analysis features:
   * - S00000101-100040: optical character recognition (OCR)
   * - S00000101-100060: video classification + face recognition
   * - S00000101-100070: OCR + video classification + face recognition
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

