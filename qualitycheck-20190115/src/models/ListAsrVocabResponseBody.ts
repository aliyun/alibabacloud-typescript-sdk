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

export class ListAsrVocabResponseBodyData extends $dara.Model {
  asrVocab?: ListAsrVocabResponseBodyDataAsrVocab[];
  static names(): { [key: string]: string } {
    return {
      asrVocab: 'AsrVocab',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrVocab: { 'type': 'array', 'itemType': ListAsrVocabResponseBodyDataAsrVocab },
    };
  }

  validate() {
    if(Array.isArray(this.asrVocab)) {
      $dara.Model.validateArray(this.asrVocab);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsrVocabResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListAsrVocabResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 66E1ACB8-17B2-4BE8-8581-954A8EE1324B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListAsrVocabResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

