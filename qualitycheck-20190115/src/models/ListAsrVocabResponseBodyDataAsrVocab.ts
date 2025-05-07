// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAsrVocabResponseBodyDataAsrVocab extends $dara.Model {
  asrVersion?: number;
  /**
   * @example
   * 2019-04-15T14:57Z
   */
  createTime?: string;
  /**
   * @example
   * 18
   */
  id?: string;
  modelCustomizationId?: string;
  name?: string;
  /**
   * @example
   * 2019-04-15T14:57Z
   */
  updateTime?: string;
  /**
   * @example
   * a01daaaxxxxxxxxx
   */
  vocabularyId?: string;
  static names(): { [key: string]: string } {
    return {
      asrVersion: 'AsrVersion',
      createTime: 'CreateTime',
      id: 'Id',
      modelCustomizationId: 'ModelCustomizationId',
      name: 'Name',
      updateTime: 'UpdateTime',
      vocabularyId: 'VocabularyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrVersion: 'number',
      createTime: 'string',
      id: 'string',
      modelCustomizationId: 'string',
      name: 'string',
      updateTime: 'string',
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

