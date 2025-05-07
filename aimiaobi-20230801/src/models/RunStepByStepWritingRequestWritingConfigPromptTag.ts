// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunStepByStepWritingRequestWritingConfigPromptTag extends $dara.Model {
  /**
   * @example
   * 必要提示
   */
  necessaryTips?: string;
  /**
   * @example
   * 立场
   */
  position?: string;
  /**
   * @example
   * 反向词
   */
  reverseWords?: string;
  /**
   * @example
   * 主题
   */
  theme?: string;
  static names(): { [key: string]: string } {
    return {
      necessaryTips: 'NecessaryTips',
      position: 'Position',
      reverseWords: 'ReverseWords',
      theme: 'Theme',
    };
  }

  static types(): { [key: string]: any } {
    return {
      necessaryTips: 'string',
      position: 'string',
      reverseWords: 'string',
      theme: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

