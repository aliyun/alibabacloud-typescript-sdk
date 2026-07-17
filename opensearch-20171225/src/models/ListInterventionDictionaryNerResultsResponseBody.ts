// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInterventionDictionaryNerResultsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The ordinal number.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The tag of the detected entity.
   * 
   * - brand: Brand
   * 
   * - category: Category
   * 
   * - material: Material
   * 
   * - element: Element
   * 
   * - style: Style
   * 
   * - color: Color
   * 
   * - function: Function
   * 
   * - scenario: Scenario
   * 
   * - people: People
   * 
   * - season: Season
   * 
   * - model: Model
   * 
   * - region: Region
   * 
   * - name: Name
   * 
   * - adjective: Adjective
   * 
   * - category-modifier: Category modifier
   * 
   * - size: Size
   * 
   * - quality: Quality
   * 
   * - suit: Suit
   * 
   * - new-release: New release
   * 
   * - series: Series
   * 
   * - marketing: Marketing
   * 
   * - entertainment: Entertainment
   * 
   * - organization: Organization
   * 
   * - movie: Movie
   * 
   * - game: Game
   * 
   * - number: Number
   * 
   * - unit: Unit
   * 
   * - common: Common word
   * 
   * - new-word: New word
   * 
   * - proper-noun: Proper noun
   * 
   * - symbol: Symbol
   * 
   * - prefix: Prefix
   * 
   * - suffix: Suffix
   * 
   * - gift: Gift
   * 
   * - negative: Negative
   * 
   * - agent: Agent
   * 
   * @example
   * category
   */
  tag?: string;
  /**
   * @remarks
   * The label of the tag.
   * 
   * @example
   * 品类
   */
  tagLabel?: string;
  /**
   * @remarks
   * The detected entity.
   * 
   * @example
   * milk
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
   * The request ID.
   * 
   * @example
   * 8F780CA8-D4D4-2FFE-B8AC-42040822C554
   */
  requestId?: string;
  /**
   * @remarks
   * The NER results.
   * 
   * For more information, see [Named Entity Recognition (NER)](https://help.aliyun.com/document_detail/173606.html).
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

