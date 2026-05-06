// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportVocabularyRequest extends $dara.Model {
  /**
   * @example
   * llm-zop7ukgtksltamo4
   */
  businessUnitId?: string;
  fileKey?: string;
  static names(): { [key: string]: string } {
    return {
      businessUnitId: 'BusinessUnitId',
      fileKey: 'FileKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessUnitId: 'string',
      fileKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

