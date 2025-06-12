// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextModerationPlusResponseBodyDataAdvice extends $dara.Model {
  /**
   * @remarks
   * The answer.
   * 
   * @example
   * XXX
   */
  answer?: string;
  /**
   * @remarks
   * Hit Label
   * 
   * @example
   * xxx
   */
  hitLabel?: string;
  /**
   * @remarks
   * Hit Library Name
   * 
   * @example
   * xxx
   */
  hitLibName?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      hitLabel: 'HitLabel',
      hitLibName: 'HitLibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      hitLabel: 'string',
      hitLibName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

