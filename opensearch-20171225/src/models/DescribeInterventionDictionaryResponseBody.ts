// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInterventionDictionaryResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The custom analyzer.
   * 
   * @example
   * -
   */
  analyzer?: string;
  /**
   * @remarks
   * The time when the the intervention dictionary was created.
   * 
   * @example
   * 1536233287
   */
  created?: string;
  /**
   * @remarks
   * The name of the the intervention dictionary.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Type
   * 
   * *   stopword: an intervention dictionary for stop word filtering.
   * *   synonym: an intervention dictionary for synonym configuration.
   * *   correction: an intervention dictionary for spelling correction.
   * *   category_prediction: an intervention dictionary for category prediction.
   * *   ner: an intervention dictionary for named entity recognition.
   * *   term_weighting: an intervention dictionary for term weight analysis.
   * 
   * @example
   * category_prediction
   */
  type?: string;
  /**
   * @remarks
   * The time when the the intervention dictionary was modified.
   * 
   * @example
   * 1536233287
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

export class DescribeInterventionDictionaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7CCF454-472A-030E-F254-604520B028AA
   */
  requestId?: string;
  /**
   * @remarks
   * The details about the intervention dictionary.
   */
  result?: DescribeInterventionDictionaryResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeInterventionDictionaryResponseBodyResult,
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

