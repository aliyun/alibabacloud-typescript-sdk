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
   * The parameter configuration of the query statement in JSON format. You can customize the parameter configuration.
   * 
   * @example
   * {"key1":"value1"}
   */
  body?: string;
  /**
   * @remarks
   * The data volume of the API data source.
   * 
   * *   Unit: Kbit/s
   * 
   * @example
   * 0.39746094
   */
  dataSize?: number;
  /**
   * @remarks
   * The last synchronization time of the API data source.
   * 
   * @example
   * 2022-05-25 16:19:43
   */
  dateUpdateTime?: string;
  /**
   * @remarks
   * The time when the quota plan was created.
   * 
   * @example
   * 2022-05-25 16:19:43
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the optimization job was modified.
   * 
   * @example
   * 2022-05-25 16:19:43
   */
  gmtModified?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * REST_API_SYNC_0f2c3c6409be4dc0810f2a5785e816a8
   */
  jobId?: string;
  /**
   * @remarks
   * The parameter configurations in the JSONArray format.
   * 
   * *   name: parameter name
   * *   value: the parameter value
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
   * test data source
   */
  showName?: string;
  /**
   * @remarks
   * The status of the API data source synchronization task.
   * 
   * Valid values:
   * 
   * *   0: the to be run.
   * *   1: The is running.
   * *   2: The is successfully.
   * *   3: failed.
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

