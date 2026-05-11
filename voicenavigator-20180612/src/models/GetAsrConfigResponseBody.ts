// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAsrConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * your-app-key
   */
  appKey?: string;
  /**
   * @example
   * 3b1d3031-8b6e-460a-8640-d330f2ca50b8
   */
  asrAcousticModelId?: string;
  /**
   * @example
   * 3b1d3031-8b6e-460a-8640-d330f2ca50b8
   */
  asrClassVocabularyId?: string;
  /**
   * @example
   * 3b1d3031-8b6e-460a-8640-d330f2ca50b8
   */
  asrCustomizationId?: string;
  asrOverrides?: string;
  /**
   * @example
   * 3b1d3031-8b6e-460a-8640-d330f2ca50b8
   */
  asrVocabularyId?: string;
  /**
   * @example
   * ali
   */
  engine?: string;
  /**
   * @example
   * EngineXufei
   */
  engineXufei?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: GetAsrConfigResponseBodyData;
  /**
   * @example
   * Not Found
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 14C39896-AE6D-4643-9C9A-E0566B2C2DDD
   */
  requestId?: string;
  /**
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

