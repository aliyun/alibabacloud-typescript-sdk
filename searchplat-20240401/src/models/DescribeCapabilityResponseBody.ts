// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCapabilityResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Timestamp of creation time
   * 
   * @example
   * 1745893195510
   */
  created?: number;
  /**
   * @remarks
   * Whether it is the default configuration
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * Configuration category
   * 
   * @example
   * ai_search_agent
   */
  itemCategory?: string;
  /**
   * @remarks
   * Configuration description
   * 
   * @example
   * 描述
   */
  itemDesc?: string;
  /**
   * @remarks
   * Configuration name
   * 
   * @example
   * es_knowledge_base
   */
  itemName?: string;
  /**
   * @remarks
   * An object containing information such as endpoint and function, which describes the detailed configuration of the knowledge base.
   */
  itemValue?: { [key: string]: any };
  /**
   * @remarks
   * Status
   * 
   * @example
   * available
   */
  status?: string;
  /**
   * @remarks
   * Update timestamp
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

export class DescribeCapabilityResponseBody extends $dara.Model {
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 0E3D5E2B-B63A-4445-B359-329CC07255EA
   */
  requestId?: string;
  /**
   * @remarks
   * Response result
   */
  result?: DescribeCapabilityResponseBodyResult;
  /**
   * @remarks
   * Request status
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      httpCode: 'httpCode',
      requestId: 'requestId',
      result: 'result',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCode: 'number',
      requestId: 'string',
      result: DescribeCapabilityResponseBodyResult,
      status: 'string',
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

