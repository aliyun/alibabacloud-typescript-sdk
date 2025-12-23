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
   * The time when the test scenario was created.
   * 
   * @example
   * 1591086323
   */
  created?: string;
  /**
   * @remarks
   * The name of the test group.
   * 
   * @example
   * testb
   */
  name?: string;
  /**
   * @remarks
   * The type of the intervention dictionary. Valid values:
   * 
   * *   stopword: an intervention dictionary for stop word filtering
   * *   synonym: an intervention dictionary for synonym configuration
   * *   correction: an intervention dictionary for spelling correction
   * *   category_prediction: an intervention dictionary for category prediction
   * *   ner: an intervention dictionary for named entity recognition (NER)
   * *   term_weighting: an intervention dictionary for term weight analysis
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
   * The ID of the request.
   * 
   * @example
   * 80326EFE-485F-46E7-B291-5A1DD08D2198
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
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

