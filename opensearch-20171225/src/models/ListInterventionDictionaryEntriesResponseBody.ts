// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInterventionDictionaryEntriesResponseBodyResultTokens extends $dara.Model {
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
   * category
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

export class ListInterventionDictionaryEntriesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The command. Valid values:
   * 
   * *   add
   * *   delete
   * 
   * @example
   * add
   */
  cmd?: string;
  /**
   * @remarks
   * The timestamp when the intervention entry was created.
   * 
   * @example
   * 1536690285
   */
  created?: number;
  /**
   * @remarks
   * The content of an intervention entry for category prediction. The field value consists of key-value pairs. The key in a key-value pair indicates the ID of the category. The value in a key-value pair indicates the relevance to the category. A value of 0 indicates irrelevant. A value of 1 indicates slightly relevant. A value of 2 indicates relevant. Example: {"2":1, "100":0}
   * 
   * @example
   * {                 "100": "0",                 "200": "2"             }
   */
  relevance?: { [key: string]: any };
  /**
   * @remarks
   * The status of the intervention entry. Valid value:
   * 
   * *   ACTIVE: The intervention entry takes effect.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The content of the intervention entry for term weight analysis.
   */
  tokens?: ListInterventionDictionaryEntriesResponseBodyResultTokens[];
  /**
   * @remarks
   * The timestamp when the intervention entry was last updated.
   * 
   * @example
   * 1537348987
   */
  updated?: number;
  /**
   * @remarks
   * The intervention entry.
   * 
   * @example
   * \\u8fc7\\u513f
   */
  word?: string;
  static names(): { [key: string]: string } {
    return {
      cmd: 'cmd',
      created: 'created',
      relevance: 'relevance',
      status: 'status',
      tokens: 'tokens',
      updated: 'updated',
      word: 'word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmd: 'string',
      created: 'number',
      relevance: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'string',
      tokens: { 'type': 'array', 'itemType': ListInterventionDictionaryEntriesResponseBodyResultTokens },
      updated: 'number',
      word: 'string',
    };
  }

  validate() {
    if(this.relevance) {
      $dara.Model.validateMap(this.relevance);
    }
    if(Array.isArray(this.tokens)) {
      $dara.Model.validateArray(this.tokens);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterventionDictionaryEntriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 516A02B7-2167-8D92-12D0-B639A2A0F3C5
   */
  requestId?: string;
  /**
   * @remarks
   * The information about intervention entries.
   * 
   * For more information, see [InterventionDictionaryEntry](https://help.aliyun.com/document_detail/173606.html).
   */
  result?: ListInterventionDictionaryEntriesResponseBodyResult[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 8
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
      result: { 'type': 'array', 'itemType': ListInterventionDictionaryEntriesResponseBodyResult },
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

