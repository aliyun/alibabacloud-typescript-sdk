// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiDatasourceResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * The ID of the API data source.
   * 
   * @example
   * 0f2c3c6409be4dc0810f2a5785e816a8
   */
  apiId?: string;
  /**
   * @remarks
   * The query statement parameter settings in JSON format, which can be user-defined.
   * 
   * @example
   * {"key1":"value1"}
   */
  body?: string;
  /**
   * @remarks
   * The data volume of the API data source.
   * - Unit: KB.
   * 
   * @example
   * 0.39746094
   */
  dataSize?: number;
  /**
   * @remarks
   * The last synchronization time of the API data source. Format example: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2022-05-25 16:19:43
   */
  dateUpdateTime?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-05-25 16:19:43
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2022-05-25 16:19:43
   */
  gmtModified?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * REST_API_SYNC_0f2c3c6409be4dc0810f2a5785e816a8
   */
  jobId?: string;
  /**
   * @remarks
   * The parameter settings in JSONArray format.
   * - name: the parameter name.
   * - value: the parameter value.
   * 
   * @example
   * [{"name":"token","value":"xxxxxxxxxxxx"},{"name":"pageSize","value":100}]
   */
  parameters?: string;
  /**
   * @remarks
   * The name of the API data source.
   * 
   * @example
   * TestDataSource
   */
  showName?: string;
  /**
   * @remarks
   * The synchronization task status of the API data source.
   * 
   * @example
   * 2
   */
  statusType?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      body: 'Body',
      dataSize: 'DataSize',
      dateUpdateTime: 'DateUpdateTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      jobId: 'JobId',
      parameters: 'Parameters',
      showName: 'ShowName',
      statusType: 'StatusType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      body: 'string',
      dataSize: 'number',
      dateUpdateTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      jobId: 'string',
      parameters: 'string',
      showName: 'string',
      statusType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiDatasourceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The list of API data sources.
   */
  data?: ListApiDatasourceResponseBodyResultData[];
  /**
   * @remarks
   * The page number of the returned data, used for pagination.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of rows per page specified in the request.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of rows.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListApiDatasourceResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiDatasourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The query result.
   */
  result?: ListApiDatasourceResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListApiDatasourceResponseBodyResult,
      success: 'boolean',
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

