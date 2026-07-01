// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetContentAnalyzeConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically start Intelligent Content Analysis after a Media Asset is registered.
   * 
   * Valid values:
   * 
   * - true: Enable
   * 
   * - false: Disable (Default)
   * 
   * @example
   * true
   */
  auto?: boolean;
  /**
   * @remarks
   * The storage type for analysis results. This parameter applies only when Auto is set to true. Default: Empty.
   * 
   * - TEXT: Label
   * 
   * - FACE: Face
   * 
   * - DNA: Similar Image
   * 
   * You can specify multiple values separated by commas. If this parameter is empty, Intelligent Content Analysis results are not saved to any search library, and you cannot perform content searches.
   * 
   * @example
   * TEXT,FACE
   */
  saveType?: string;
  /**
   * @remarks
   * The ID of the Intelligent Content Analysis Template. Each Template includes the following AI analysis features:
   * 
   * - S00000101-100040: Text Recognition
   * 
   * - S00000101-100060: Video Categorization and Face Recognition
   * 
   * - S00000101-100070: Text Recognition, Video Categorization, and Face Recognition
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

