// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserAnalyzersResponseBodyResultDicts extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the application is available.
   * 
   * @example
   * false
   */
  available?: boolean;
  /**
   * @remarks
   * The timestamp when the application was created.
   * 
   * @example
   * 1588054131
   */
  created?: number;
  /**
   * @remarks
   * The number of intervention entries.
   * 
   * @example
   * -1
   */
  entriesCount?: number;
  /**
   * @remarks
   * The maximum number of intervention entries that can be created in the dictionary.
   * 
   * @example
   * 4
   */
  entriesLimit?: number;
  /**
   * @remarks
   * The ID of the dictionary.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * The type. Valid value:
   * 
   * *   segment
   * 
   * @example
   * segment
   */
  type?: string;
  /**
   * @remarks
   * The timestamp when the application was last updated.
   * 
   * @example
   * 1588054131
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      available: 'available',
      created: 'created',
      entriesCount: 'entriesCount',
      entriesLimit: 'entriesLimit',
      id: 'id',
      type: 'type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'boolean',
      created: 'number',
      entriesCount: 'number',
      entriesLimit: 'number',
      id: 'string',
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

export class ListUserAnalyzersResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the application is available.
   * 
   * @example
   * false
   */
  available?: boolean;
  /**
   * @remarks
   * The basic analyzer. Valid values:
   * 
   * *   chn_standard: [a common analyzer in Chinese](https://help.aliyun.com/document_detail/179424.html)
   * *   chn_scene_name: an analyzer for person names in Chinese
   * *   chn_ecommerce: [an analyzer for E-commerce in Chinese](https://help.aliyun.com/document_detail/179424.html)
   * *   chn_it_content: [an analyzer for IT content in Chinese](https://help.aliyun.com/document_detail/179424.html)
   * *   en_min: a small-granularity analyzer in English
   * *   th_standard: a common analyzer in Thai
   * *   th_ecommerce: an analyzer for E-commerce in Thai
   * *   vn_standard: a common analyzer in Vietnamese
   * *   chn_community_it: an analyzer for IT community content in Chinese
   * *   chn_ecommerce_general: a common analyzer for the E-commerce industry in Chinese
   * *   chn_esports_general: a common analyzer for the gaming industry in Chinese
   * *   chn_edu_question: an analyzer for question search of the education industry in Chinese
   * 
   * @example
   * chn_standard
   */
  business?: string;
  /**
   * @remarks
   * The timestamp when the application was created.
   * 
   * @example
   * 1588054131
   */
  created?: number;
  /**
   * @remarks
   * The dictionaries that are used by the custom analyzer.
   * 
   * For more information, see [UserDict](https://help.aliyun.com/document_detail/178933.html).
   */
  dicts?: ListUserAnalyzersResponseBodyResultDicts[];
  /**
   * @remarks
   * The ID of the custom analyzer.
   * 
   * @example
   * 1234
   */
  id?: string;
  /**
   * @remarks
   * The name of the custom analyzer.
   * 
   * @example
   * kevin_test2
   */
  name?: string;
  /**
   * @remarks
   * The timestamp when the application was last updated.
   * 
   * @example
   * 1588054131
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      available: 'available',
      business: 'business',
      created: 'created',
      dicts: 'dicts',
      id: 'id',
      name: 'name',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'boolean',
      business: 'string',
      created: 'number',
      dicts: { 'type': 'array', 'itemType': ListUserAnalyzersResponseBodyResultDicts },
      id: 'string',
      name: 'string',
      updated: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dicts)) {
      $dara.Model.validateArray(this.dicts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAnalyzersResponseBody extends $dara.Model {
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
   * The custom analyzer.
   * 
   * For more information, see [UserAnalyzer](https://help.aliyun.com/document_detail/178934.html).
   */
  result?: ListUserAnalyzersResponseBodyResult[];
  /**
   * @remarks
   * The total number.
   * 
   * @example
   * 1
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
      result: { 'type': 'array', 'itemType': ListUserAnalyzersResponseBodyResult },
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

