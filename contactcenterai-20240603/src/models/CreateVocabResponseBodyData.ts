// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVocabResponseBodyData extends $dara.Model {
  /**
   * @example
   * f3d82*******7
   */
  vocabularyId?: string;
  static names(): { [key: string]: string } {
    return {
      vocabularyId: 'vocabularyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vocabularyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

