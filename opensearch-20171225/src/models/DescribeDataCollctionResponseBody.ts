// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataCollctionResponseBodyResult extends $dara.Model {
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
   * The type of the data collection.
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
   * - general: General
   * 
   * - ecommerce: E-commerce
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
   * - 0: The data collection is not enabled.
   * 
   * - 1: The data collection is being enabled.
   * 
   * - 2: The data collection is enabled.
   * 
   * - 3: The data collection failed to be enabled.
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
   *   Only server is supported.
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

export class DescribeDataCollctionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 72FAD77B-83F9-F393-BA8E-5834E2427BF8
   */
  requestId?: string;
  /**
   * @remarks
   * The data collection information.
   */
  result?: DescribeDataCollctionResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeDataCollctionResponseBodyResult,
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

