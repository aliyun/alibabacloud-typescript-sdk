// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVocabResponseBodyData extends $dara.Model {
  /**
   * @example
   * f3d82*******7
   */
  vocabularyId?: string;
  static names(): { [key: string]: string } {
    return {
      vocabularyId: 'vocabularyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateVocabResponseBody extends $dara.Model {
  data?: CreateVocabResponseBodyData;
  /**
   * @example
   * 968A8634-FA2C-5381-9B3E-*******F
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateVocabResponseBodyData,
      requestId: 'string',
      success: 'string',
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

