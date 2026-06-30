// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAsrVocabResponseBodyDataAsrVocab extends $dara.Model {
  asrVersion?: number;
  createTime?: string;
  id?: string;
  modelCustomizationId?: string;
  name?: string;
  updateTime?: string;
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
   * @remarks
   * The result code. A value of **200** indicates that the request was successful. Other values indicate that the request failed. You can use this field to determine the cause of the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  data?: ListAsrVocabResponseBodyData;
  /**
   * @remarks
   * The error details if the request fails. If the request is successful, the value is **successful**.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 66E1ACB8-17B2-4BE8-8581-954A8EE1324B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Use this field to determine if the request was successful. A value of true indicates success. A value of **false** or **null** indicates failure.
   * 
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

