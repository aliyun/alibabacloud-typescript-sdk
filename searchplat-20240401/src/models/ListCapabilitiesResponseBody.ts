// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCapabilitiesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1729665694
   */
  created?: number;
  /**
   * @remarks
   * Indicates whether the configuration is the default configuration.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The configuration category.
   * 
   * @example
   * ai_search_agent
   */
  itemCategory?: string;
  /**
   * @remarks
   * The configuration description.
   * 
   * @example
   * 描述
   */
  itemDesc?: string;
  /**
   * @remarks
   * The configuration name.
   * 
   * @example
   * es_knowledge_base
   */
  itemName?: string;
  /**
   * @remarks
   * itemValue
   */
  itemValue?: { [key: string]: any };
  /**
   * @remarks
   * status
   * 
   * @example
   * available
   */
  status?: string;
  /**
   * @remarks
   * updated
   * 
   * @example
   * 1729665694
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      isDefault: 'isDefault',
      itemCategory: 'itemCategory',
      itemDesc: 'itemDesc',
      itemName: 'itemName',
      itemValue: 'itemValue',
      status: 'status',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      isDefault: 'boolean',
      itemCategory: 'string',
      itemDesc: 'string',
      itemName: 'string',
      itemValue: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'string',
      updated: 'number',
    };
  }

  validate() {
    if(this.itemValue) {
      $dara.Model.validateMap(this.itemValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCapabilitiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The number of returned entries.
   * 
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * G5FG/nXfNOQ=
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5950143C-B8F0-5758-A08A-66F302FD587F
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListCapabilitiesResponseBodyResult[];
  /**
   * @remarks
   * The request status.
   * 
   * @example
   * OK
   */
  status?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'httpCode',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      result: 'result',
      status: 'status',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'number',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListCapabilitiesResponseBodyResult },
      status: 'string',
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

