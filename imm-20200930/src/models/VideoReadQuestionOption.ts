// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoReadQuestionOption extends $dara.Model {
  /**
   * @remarks
   * Specifies the maximum number of answers to return when `Extract` is `true`. If omitted, the service returns all detected answers.
   */
  count?: number;
  /**
   * @remarks
   * Specifies whether to extract answer segments from the video. When `true`, the service identifies and returns these segments. The default is `false`.
   */
  extract?: boolean;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      extract: 'Extract',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      extract: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

