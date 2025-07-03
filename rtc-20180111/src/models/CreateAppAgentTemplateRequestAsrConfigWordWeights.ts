// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppAgentTemplateRequestAsrConfigWordWeights extends $dara.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  weight?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 苹果
   */
  word?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      weight: 'Weight',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      weight: 'number',
      word: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

