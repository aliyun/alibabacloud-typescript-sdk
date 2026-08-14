// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTranscriptionPhrasesResponseBodyDataPhrases extends $dara.Model {
  /**
   * @remarks
   * Phrase list description.
   * 
   * @example
   * custom fruit phrases list
   */
  description?: string;
  /**
   * @remarks
   * Phrase list name.
   * 
   * @example
   * fruit_phrase
   */
  name?: string;
  /**
   * @remarks
   * Phrase list ID.
   * 
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
   * @remarks
   * error code.
   * 
   * @example
   * PHS.Exceed
   */
  errorCode?: string;
  /**
   * @remarks
   * error message.
   * 
   * @example
   * The num of the phrase exceeds the upper limit.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Phrase objects.
   */
  phrases?: ListTranscriptionPhrasesResponseBodyDataPhrases[];
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
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
   * @remarks
   * status code.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * Response object.
   */
  data?: ListTranscriptionPhrasesResponseBodyData;
  /**
   * @remarks
   * status description.
   * 
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

