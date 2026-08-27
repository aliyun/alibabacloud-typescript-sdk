// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTranslationTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The API key that is the identity of the member accounts. You can obtain this from the RuiYiBao console.
   * 
   * @example
   * ***
   */
  APIKey?: string;
  /**
   * @remarks
   * The task ID of a previously submitted translation task. Pass in this parameter when resubmitting a translation task.
   * - You must pass in either this parameter or TaskId.
   * 
   * @example
   * f9c35b0453b
   */
  baseTaskId?: string;
  /**
   * @remarks
   * The translation configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *         "SourceLanguage": "zh",
   *         "TargetLanguage": "en",
   *         "Style": "minimal",
   *         "Font": "Arial"
   *     }
   */
  configShrink?: string;
  /**
   * @remarks
   * The custom terms.
   * >Notice: Custom terms are for reference only. The actual translation results may differ. Refer to the final output as the definitive result.</notice>
   * 
   * @example
   * [{"SourceTerm":"dog", "TargetTerm":"dog"}]
   */
  customTermsShrink?: string;
  /**
   * @remarks
   * The translation task ID.
   * - Obtained from the TaskId returned by UploadTranslationFile.
   * - You must pass in either this parameter or BaseTaskId.
   * 
   * @example
   * f9c35b0453b
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      APIKey: 'APIKey',
      baseTaskId: 'BaseTaskId',
      configShrink: 'Config',
      customTermsShrink: 'CustomTerms',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APIKey: 'string',
      baseTaskId: 'string',
      configShrink: 'string',
      customTermsShrink: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

