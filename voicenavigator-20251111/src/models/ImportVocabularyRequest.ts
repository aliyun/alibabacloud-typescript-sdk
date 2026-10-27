// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportVocabularyRequest extends $dara.Model {
  /**
   * @remarks
   * The path to the uploaded file.
   * 
   * @example
   * vocabulary/热词导入单元测试.zip
   */
  fileKey?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileKey: 'FileKey',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileKey: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

