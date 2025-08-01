// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAIAnalysisResponseBodyData extends $dara.Model {
  /**
   * @example
   * 16896fa8-37f6-4c70-bb32-67fa9817d426
   */
  analysisId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisId: 'analysis_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAIAnalysisResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: StartAIAnalysisResponseBodyData;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: StartAIAnalysisResponseBodyData,
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

