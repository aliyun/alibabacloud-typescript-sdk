// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAITeacherExpansionDialogueSuggestionResponseBodyData extends $dara.Model {
  /**
   * @example
   * 谢谢莉莉.你喜欢吃肉吗，莉莉？
   */
  chineseResult?: string;
  /**
   * @example
   * Thanks, Lily. Do you like meat, Lily?
   */
  englishResult?: string;
  static names(): { [key: string]: string } {
    return {
      chineseResult: 'chineseResult',
      englishResult: 'englishResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chineseResult: 'string',
      englishResult: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

