// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVocabularyShrinkRequest extends $dara.Model {
  /**
   * @example
   * llm-baployoyopf22m2r
   */
  businessUnitId?: string;
  description?: string;
  name?: string;
  wordsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      businessUnitId: 'BusinessUnitId',
      description: 'Description',
      name: 'Name',
      wordsShrink: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessUnitId: 'string',
      description: 'string',
      name: 'string',
      wordsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

