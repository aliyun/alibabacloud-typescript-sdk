// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInterventionDictionaryResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The custom analyzer.
   * 
   * @example
   * dianshang
   */
  analyzer?: string;
  /**
   * @remarks
   * The time when the dictionary was created.
   * 
   * @example
   * 1591086323
   */
  created?: string;
  /**
   * @remarks
   * The name of the dictionary.
   * 
   * @example
   * testb
   */
  name?: string;
  /**
   * @remarks
   * The type of the intervention dictionary. Valid values:
   * 
   * - stopword: an intervention dictionary for stop word filtering.
   * 
   * - synonym: an intervention dictionary for synonym configuration.
   * 
   * - correction: an intervention dictionary for spelling correction.
   * 
   * - category_prediction: an intervention dictionary for category prediction.
   * 
   * - ner: an intervention dictionary for Named Entity Recognition (NER).
   * 
   * - term_weighting: an intervention dictionary for term weight analysis.
   * 
   * - suggest_allowlist: a drop-down suggestion whitelist.
   * 
   * - suggest_denylist: a drop-down suggestion blacklist.
   * 
   * - hot_allowlist: a top search whitelist.
   * 
   * - hot_denylist: a top search blacklist.
   * 
   * - hint_allowlist: a hint whitelist.
   * 
   * - hint_denylist: a hint blacklist.
   * 
   * @example
   * ner
   */
  type?: string;
  /**
   * @remarks
   * The time when the intervention dictionary was last updated.
   * 
   * @example
   * 1591086323
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

export class CreateInterventionDictionaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 80326EFE-485F-46E7-B291-5A1DD08D2198
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the intervention dictionary.
   */
  result?: CreateInterventionDictionaryResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateInterventionDictionaryResponseBodyResult,
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

