// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataCollctionResponseBodyResult extends $dara.Model {
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
   * The ID of the data collection task.
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
   * *   app Note: Only server is supported.
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
   * The details of the data collection task.
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

