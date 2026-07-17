// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveInterventionDictionaryResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The custom analyzer.
   * 
   * @example
   * ""
   */
  analyzer?: string;
  /**
   * @remarks
   * The time when the intervention dictionary was created.
   * 
   * @example
   * 1539158313
   */
  created?: string;
  /**
   * @remarks
   * The name of the dictionary.
   * 
   * @example
   * tongyici
   */
  name?: string;
  /**
   * @remarks
   * The type of the dictionary. Valid values:
   * 
   * - stopword: An intervention dictionary for stop words.
   * 
   * - synonym: An intervention dictionary for synonyms.
   * 
   * - correction: An intervention dictionary for spelling correction.
   * 
   * - category_prediction: An intervention dictionary for category prediction.
   * 
   * - ner: An intervention dictionary for Named Entity Recognition (NER).
   * 
   * - term_weighting: An intervention dictionary for term weights.
   * 
   * @example
   * synonym
   */
  type?: string;
  /**
   * @remarks
   * The time when the intervention dictionary was updated.
   * 
   * @example
   * 1539158313
   */
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      analyzer: 'analyzer',
      created: 'created',
      name: 'name',
      type: 'type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzer: 'string',
      created: 'string',
      name: 'string',
      type: 'string',
      updated: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveInterventionDictionaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06BBD41A-5F72-34E4-2DAF-E43B0526051D
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the intervention dictionary.
   */
  result?: RemoveInterventionDictionaryResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: RemoveInterventionDictionaryResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

