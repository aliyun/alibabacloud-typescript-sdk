// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAsrVocabResponseBodyDataWordsWord extends $dara.Model {
  weight?: number;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      weight: 'Weight',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetAsrVocabResponseBodyDataWords extends $dara.Model {
  word?: GetAsrVocabResponseBodyDataWordsWord[];
  static names(): { [key: string]: string } {
    return {
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      word: { 'type': 'array', 'itemType': GetAsrVocabResponseBodyDataWordsWord },
    };
  }

  validate() {
    if(Array.isArray(this.word)) {
      $dara.Model.validateArray(this.word);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrVocabResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ASR version.
   * 
   * - 2 or **null**: V2 (Intelligent Speech Interaction ASR)
   * 
   * - **3**: V3 (Paraformer ASR)
   * 
   * @example
   * 3
   */
  asrVersion?: number;
  /**
   * @remarks
   * The language model ID. This field appears only for V3.
   * 
   * @example
   * paraformer-8k-v2
   */
  modelCustomizationId?: string;
  /**
   * @remarks
   * The hotword group name.
   * 
   * @example
   * test
   */
  name?: string;
  words?: GetAsrVocabResponseBodyDataWords;
  static names(): { [key: string]: string } {
    return {
      asrVersion: 'AsrVersion',
      modelCustomizationId: 'ModelCustomizationId',
      name: 'Name',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrVersion: 'number',
      modelCustomizationId: 'string',
      name: 'string',
      words: GetAsrVocabResponseBodyDataWords,
    };
  }

  validate() {
    if(this.words && typeof (this.words as any).validate === 'function') {
      (this.words as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrVocabResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** means success. Any other value means failure. Use this field to identify the cause of failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetAsrVocabResponseBodyData;
  /**
   * @remarks
   * Error details if the request fails. If successful, the value is **successful**.
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
   * 3CEA0495-341B-4482-9AD9-8191EF4***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Use this field to check the result:
   * 
   * - **true** means success
   * 
   * - false or **null** means failure
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
      data: GetAsrVocabResponseBodyData,
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

