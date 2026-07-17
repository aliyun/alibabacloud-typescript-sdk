// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCollectionsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the data collection was created.
   * 
   * @example
   * 1581065837
   */
  created?: number;
  /**
   * @remarks
   * The type of data collection.
   * 
   * - behavior: User behavior data.
   * 
   * - item_info: Item information.
   * 
   * - industry_specific: Industry-specific attributes.
   * 
   * @example
   * BEHAVIOR
   */
  dataCollectionType?: string;
  /**
   * @remarks
   * The ID of the data collection.
   * 
   * @example
   * 286
   */
  id?: string;
  /**
   * @remarks
   * The name of the industry.
   * 
   * - general: General.
   * 
   * - ecommerce: E-commerce.
   * 
   * @example
   * GENERAL
   */
  industryName?: string;
  /**
   * @remarks
   * The name of the data collection.
   * 
   * @example
   * os_function_test_v1
   */
  name?: string;
  /**
   * @remarks
   * The status.
   * 
   * - 0: Disabled.
   * 
   * - 1: Enabling.
   * 
   * - 2: Enabled.
   * 
   * - 3: Failed.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The ID of the sundial.
   * 
   * @example
   * 1755
   */
  sundialId?: string;
  /**
   * @remarks
   * The type of the data collection client.
   * 
   * - server
   * 
   * - web
   * 
   * - app
   * 
   * Note: Only server is supported.
   * 
   * @example
   * server
   */
  type?: string;
  /**
   * @remarks
   * The time when the data collection was last updated.
   * 
   * @example
   * 1581065904
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      dataCollectionType: 'dataCollectionType',
      id: 'id',
      industryName: 'industryName',
      name: 'name',
      status: 'status',
      sundialId: 'sundialId',
      type: 'type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      dataCollectionType: 'string',
      id: 'string',
      industryName: 'string',
      name: 'string',
      status: 'number',
      sundialId: 'string',
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

export class ListDataCollectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 959D8782-B130-95EB-86CC-1F6ED447981F
   */
  requestId?: string;
  /**
   * @remarks
   * The data collection information.
   * 
   * For more information, see [DataCollection](https://help.aliyun.com/document_detail/173605.html).
   */
  result?: ListDataCollectionsResponseBodyResult[];
  /**
   * @remarks
   * The total number of entries.
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
      result: { 'type': 'array', 'itemType': ListDataCollectionsResponseBodyResult },
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

