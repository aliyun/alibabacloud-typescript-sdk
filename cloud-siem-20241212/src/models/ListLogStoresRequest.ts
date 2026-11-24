// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogStoresRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the returned message. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * Note: This parameter is actually required. If it is not provided, the API returns a 400 error (The specified Lang can not be empty.).
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project. The project name follows the naming convention aliyun-cloudsiem-data-{userId}-{regionId}. You can call the GetDataStorage operation and obtain a valid project name from the Data.LogProject field in the response. This parameter is actually required. You can call the GetDataStorage operation to obtain valid values.
   * 
   * @example
   * aliyun-cloudsiem-data-173326*******-cn-hangzhou
   */
  logProjectName?: string;
  /**
   * @remarks
   * The log storage region ID. This parameter is required when LogProjectName is provided, and the log storage region must be consistent with the log project. You can call the GetDataStorage operation to obtain valid values.
   * 
   * @example
   * cn-hangzhou
   */
  logRegionId?: string;
  /**
   * @remarks
   * The ID of the data ingestion user.
   * 
   * @example
   * 173326*******
   */
  logUserId?: number;
  /**
   * @remarks
   * The maximum number of entries to return for the current request.
   * 
   * @example
   * 50
   * 
   * **if can be null:**
   * true
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. If this is the first query or no subsequent query is required, you do not need to specify this parameter. If a subsequent query is required, set this parameter to the NextToken value returned by the previous API call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region of the data management center for threat analysis. You must select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: Assets are located in the Chinese mainland.
   * - ap-southeast-1: Assets are located outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user whose perspective the administrator switches to.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      logProjectName: 'LogProjectName',
      logRegionId: 'LogRegionId',
      logUserId: 'LogUserId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      logProjectName: 'string',
      logRegionId: 'string',
      logUserId: 'number',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

