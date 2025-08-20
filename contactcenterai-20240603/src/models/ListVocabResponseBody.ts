// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVocabResponseBodyDataWordWeightList extends $dara.Model {
  /**
   * @example
   * 3
   */
  weight?: number;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      weight: 'weight',
      word: 'word',
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

export class ListVocabResponseBodyData extends $dara.Model {
  /**
   * @example
   * nls
   */
  audioModelCode?: string;
  description?: string;
  name?: string;
  /**
   * @example
   * dv*****erverve
   */
  vocabularyId?: string;
  wordWeightList?: ListVocabResponseBodyDataWordWeightList[];
  static names(): { [key: string]: string } {
    return {
      audioModelCode: 'audioModelCode',
      description: 'description',
      name: 'name',
      vocabularyId: 'vocabularyId',
      wordWeightList: 'wordWeightList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioModelCode: 'string',
      description: 'string',
      name: 'string',
      vocabularyId: 'string',
      wordWeightList: { 'type': 'array', 'itemType': ListVocabResponseBodyDataWordWeightList },
    };
  }

  validate() {
    if(Array.isArray(this.wordWeightList)) {
      $dara.Model.validateArray(this.wordWeightList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVocabResponseBody extends $dara.Model {
  data?: ListVocabResponseBodyData[];
  /**
   * @example
   * 968A8634-FA2C-5381-9B3E-*******F
   */
  requestId?: string;
  /**
   * @example
   * true
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
      data: { 'type': 'array', 'itemType': ListVocabResponseBodyData },
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

