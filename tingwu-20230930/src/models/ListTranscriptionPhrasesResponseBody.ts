// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTranscriptionPhrasesResponseBodyDataPhrases extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      phraseId: 'PhraseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      phraseId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTranscriptionPhrasesResponseBodyData extends $dara.Model {
  /**
   * @example
   * PHS.Exceed
   */
  errorCode?: string;
  /**
   * @example
   * The num of the phrase exceeds the upper limit.
   */
  errorMessage?: string;
  phrases?: ListTranscriptionPhrasesResponseBodyDataPhrases[];
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
      phrases: { 'type': 'array', 'itemType': ListTranscriptionPhrasesResponseBodyDataPhrases },
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

export class ListTranscriptionPhrasesResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: ListTranscriptionPhrasesResponseBodyData;
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
      data: ListTranscriptionPhrasesResponseBodyData,
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

