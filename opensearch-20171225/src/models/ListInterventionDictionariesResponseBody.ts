// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInterventionDictionariesResponseBodyResult extends $dara.Model {
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
   * 1539158325
   */
  created?: number;
  /**
   * @remarks
   * The ID of the intervention dictionary.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the intervention dictionary.
   * 
   * @example
   * tongyici
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
   * synonym
   */
  type?: string;
  /**
   * @remarks
   * The time when the intervention dictionary was last updated.
   * 
   * @example
   * 1539158313
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      analyzer: 'analyzer',
      created: 'created',
      id: 'id',
      name: 'name',
      type: 'type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzer: 'string',
      created: 'number',
      id: 'number',
      name: 'string',
      type: 'string',
      updated: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionariesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0A6EB64B-B4C8-CF02-810F-E660812972FF
   */
  requestId?: string;
  /**
   * @remarks
   * The information about each intervention dictionary.
   * 
   * For more information, see [InterventionDictionary](https://help.aliyun.com/document_detail/173608.html).
   */
  result?: ListInterventionDictionariesResponseBodyResult[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListInterventionDictionariesResponseBodyResult },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

