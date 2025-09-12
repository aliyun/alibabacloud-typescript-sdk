// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTranscriptionPhrasesResponseBodyDataPhrases extends $dara.Model {
  /**
   * @example
   * custom fruit phrases list
   */
  description?: string;
  /**
   * @example
   * fruit_phrase
   */
  name?: string;
  /**
   * @example
   * a93b91141c0f422fa114af203f8b****
   */
  phraseId?: string;
  /**
   * @example
   * {"苹果":3,"西瓜":3}
   */
  wordWeights?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      phraseId: 'PhraseId',
      wordWeights: 'WordWeights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      phraseId: 'string',
      wordWeights: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscriptionPhrasesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @example
   * success
   */
  errorMessage?: string;
  phrases?: GetTranscriptionPhrasesResponseBodyDataPhrases[];
  /**
   * @example
   * SUCCEEDED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      phrases: 'Phrases',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      phrases: { 'type': 'array', 'itemType': GetTranscriptionPhrasesResponseBodyDataPhrases },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.phrases)) {
      $dara.Model.validateArray(this.phrases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscriptionPhrasesResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: GetTranscriptionPhrasesResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 35124E1C-AE99-5D6C-A52E-BD689D8D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTranscriptionPhrasesResponseBodyData,
      message: 'string',
      requestId: 'string',
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

