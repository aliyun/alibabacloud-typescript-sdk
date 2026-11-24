// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataConnectorsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of data connector IDs.
   */
  dataConnectorIds?: string[];
  /**
   * @remarks
   * The name of the data connector.
   * 
   * @example
   * SAS-CTDR-2026070210****
   */
  dataConnectorName?: string;
  /**
   * @remarks
   * The enabled status of the data connector. Valid values:
   * - "enabled": Enabled.
   * - "disabled" (default): Disabled.
   * 
   * @example
   * enabled
   */
  dataConnectorStatus?: string;
  /**
   * @remarks
   * The type of the data connector. Valid values:
   * - oss
   * - s3
   * - kafka
   * 
   * @example
   * s3
   */
  dataConnectorType?: string;
  /**
   * @remarks
   * The ID of the destination data source. This parameter is required only for synchronization.
   * 
   * @example
   * ds-5sfe68t122pxnti1cjpl
   */
  destDataSourceId?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * Note: This parameter is required in actual API calls. If this parameter is not provided, the service returns a 400 error with the message "The specified Lang can not be empty." Explicitly pass the language code.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return for a single query when you use the NextToken method. Valid values: 1 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to query the next page. You do not need to specify this parameter for the first query or when no next page exists. If a next page exists, set this parameter to the NextToken value returned by the previous API call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The field used for sorting.
   * Currently, only sorting by updateTime is supported.
   * If OrderField is empty, the default order returned by the database is used.
   * 
   * @example
   * Id
   */
  orderField?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - "asc"
   * - "desc" (default)
   * 
   * @example
   * desc
   */
  orderType?: string;
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 1000.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the data management center for threat analysis is located. Select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: The assets are located in the Chinese mainland.
   * - ap-southeast-1: The assets are located outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user whose perspective the administrator assumes.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The name of the Simple Log Service (SLS) data import job for the data connector.
   * 
   * @example
   * ingest-oss-dc-1a2b3c4d5e6f7a8****
   */
  slsIngestionJobName?: string;
  /**
   * @remarks
   * The source data type.
   * 
   * @example
   * s3
   */
  srcDataType?: string;
  static names(): { [key: string]: string } {
    return {
      dataConnectorIds: 'DataConnectorIds',
      dataConnectorName: 'DataConnectorName',
      dataConnectorStatus: 'DataConnectorStatus',
      dataConnectorType: 'DataConnectorType',
      destDataSourceId: 'DestDataSourceId',
      lang: 'Lang',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderField: 'OrderField',
      orderType: 'OrderType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      slsIngestionJobName: 'SlsIngestionJobName',
      srcDataType: 'SrcDataType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataConnectorIds: { 'type': 'array', 'itemType': 'string' },
      dataConnectorName: 'string',
      dataConnectorStatus: 'string',
      dataConnectorType: 'string',
      destDataSourceId: 'string',
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderField: 'string',
      orderType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
      slsIngestionJobName: 'string',
      srcDataType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataConnectorIds)) {
      $dara.Model.validateArray(this.dataConnectorIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

