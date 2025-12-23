// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataCollectionsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 1581065837
   */
  created?: number;
  /**
   * @remarks
   * The type of data collected. Valid values:
   * 
   * *   behavior: behavioral data.
   * *   item_info: project information.
   * *   industry_specific: industry-specific data.
   * 
   * @example
   * BEHAVIOR
   */
  dataCollectionType?: string;
  /**
   * @remarks
   * The data collection ID.
   * 
   * @example
   * 286
   */
  id?: string;
  /**
   * @remarks
   * The industry name. Valid values:
   * 
   * *   general
   * *   ecommerce
   * 
   * @example
   * GENERAL
   */
  industryName?: string;
  /**
   * @remarks
   * The name of the data collection task.
   * 
   * @example
   * os_function_test_v1
   */
  name?: string;
  /**
   * @remarks
   * The status of the data collection feature. Valid values:
   * 
   * *   0: The feature is disabled.
   * *   1: The feature is being enabled.
   * *   2: The feature is enabled.
   * *   3: The feature failed to be enabled.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The sundial ID.
   * 
   * @example
   * 1755
   */
  sundialId?: string;
  /**
   * @remarks
   * The type of the source from which data was collected. Valid values:
   * 
   * *   server
   * *   web
   * *   app
   * 
   * Only server is supported.
   * 
   * @example
   * server
   */
  type?: string;
  /**
   * @remarks
   * The time when the data collection task was updated.
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
   * The request ID.
   * 
   * @example
   * 959D8782-B130-95EB-86CC-1F6ED447981F
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the data collection task.
   * 
   * For more information, see [DataCollection](https://help.aliyun.com/document_detail/173605.html).
   */
  result?: ListDataCollectionsResponseBodyResult[];
  /**
   * @remarks
   * The total number of entries returned.
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

