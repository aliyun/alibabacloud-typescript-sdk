// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmartClipTaskRequestOutputConfig extends $dara.Model {
  /**
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * test_{index}.mp4
   */
  fileName?: string;
  /**
   * @example
   * 1080
   */
  height?: number;
  /**
   * @example
   * 120
   */
  maxDuration?: number;
  /**
   * @example
   * true
   */
  saveToGeneratedContent?: boolean;
  /**
   * @example
   * 1920
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      fileName: 'FileName',
      height: 'Height',
      maxDuration: 'MaxDuration',
      saveToGeneratedContent: 'SaveToGeneratedContent',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      fileName: 'string',
      height: 'number',
      maxDuration: 'number',
      saveToGeneratedContent: 'boolean',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

