// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportVocabularyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Bailian business workspace.
   * 
   * @example
   * llm-zop7ukgtksltamo4
   */
  businessUnitId?: string;
  /**
   * @remarks
   * The path of the uploaded file.
   * 
   * @example
   * vocabulary/热词导入单元测试.zip
   */
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

