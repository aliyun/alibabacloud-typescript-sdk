// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAsrConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application key.
   * 
   * @example
   * your-app-key
   */
  appKey?: string;
  /**
   * @remarks
   * The acoustic model ID.
   * 
   * @example
   * 3b1d3031-8b6e-460a-8640-d330f2ca50b8
   */
  asrAcousticModelId?: string;
  /**
   * @remarks
   * The ASR class vocabulary ID.
   * 
   * @example
   * 3b1d3031-8b6e-460a-8640-d330f2ca50b8
   */
  asrClassVocabularyId?: string;
  /**
   * @remarks
   * The customization ID.
   * 
   * @example
   * 3b1d3031-8b6e-460a-8640-d330f2ca50b8
   */
  asrCustomizationId?: string;
  asrOverrides?: string;
  /**
   * @remarks
   * The vocabulary ID. You can view the ID on the [ASR Vocabulary Management page](https://aiccs.console.aliyun.com/sentence/vocab?spm=a2c4g.11186623.0.0.7f9bf965IKBpsi).
   * 
   * @example
   * 3b1d3031-8b6e-460a-8640-d330f2ca50b8
   */
  asrVocabularyId?: string;
  /**
   * @remarks
   * The speech engine.
   * 
   * @example
   * ali
   */
  engine?: string;
  /**
   * @remarks
   * Parameters for the iFLYTEK engine.
   * 
   * @example
   * EngineXufei
   */
  engineXufei?: string;
  /**
   * @remarks
   * The NLS service type.
   * 
   * @example
   * Authorized
   */
  nlsServiceType?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      asrAcousticModelId: 'AsrAcousticModelId',
      asrClassVocabularyId: 'AsrClassVocabularyId',
      asrCustomizationId: 'AsrCustomizationId',
      asrOverrides: 'AsrOverrides',
      asrVocabularyId: 'AsrVocabularyId',
      engine: 'Engine',
      engineXufei: 'EngineXufei',
      nlsServiceType: 'NlsServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      asrAcousticModelId: 'string',
      asrClassVocabularyId: 'string',
      asrCustomizationId: 'string',
      asrOverrides: 'string',
      asrVocabularyId: 'string',
      engine: 'string',
      engineXufei: 'string',
      nlsServiceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetAsrConfigResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Not Found
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 14C39896-AE6D-4643-9C9A-E0566B2C2DDD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAsrConfigResponseBodyData,
      errorMsg: 'string',
      httpStatusCode: 'number',
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

