// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportVocabularyRequest extends $dara.Model {
  fileKey?: string;
  /**
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

