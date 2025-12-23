// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInterventionDictionaryNerResultsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The sequence number.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The internal name of the identified entity type. Valid values:
   * 
   * *   brand
   * *   category
   * *   material
   * *   element
   * *   style
   * *   color
   * *   function
   * *   scenario
   * *   people
   * *   season
   * *   model
   * *   region
   * *   name
   * *   adjective
   * *   category-modifier
   * *   size
   * *   quality
   * *   suit
   * *   new-release
   * *   series
   * *   marketing
   * *   entertainment
   * *   organization
   * *   movie
   * *   game
   * *   number
   * *   unit
   * *   common
   * *   new-word
   * *   proper-noun
   * *   symbol
   * *   prefix
   * *   suffix
   * *   gift
   * *   negative
   * *   agent
   * 
   * @example
   * category
   */
  tag?: string;
  /**
   * @remarks
   * The description of the internal name of the identified entity type.
   * 
   * @example
   * category
   */
  tagLabel?: string;
  /**
   * @remarks
   * The entity.
   * 
   * @example
   * eaa73f35-007a-4be7-88c7-37dca4a04ab7
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'order',
      tag: 'tag',
      tagLabel: 'tagLabel',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'number',
      tag: 'string',
      tagLabel: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionaryNerResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8F780CA8-D4D4-2FFE-B8AC-42040822C554
   */
  requestId?: string;
  /**
   * @remarks
   * The NER result.
   * 
   * For more information, see [InterventionDictionaryEntry](https://help.aliyun.com/document_detail/173606.html).
   */
  result?: ListInterventionDictionaryNerResultsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListInterventionDictionaryNerResultsResponseBodyResult },
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

