// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataConnectorsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of collector IDs.
   */
  dataConnectorIds?: string[];
  /**
   * @remarks
   * The collector name.
   * 
   * @example
   * SAS-CTDR-2026070210****
   */
  dataConnectorName?: string;
  /**
   * @remarks
   * The collector status. Valid values:
   * - "enabled": enabled.
   * - "disabled" (default): disabled.
   * 
   * @example
   * enabled
   */
  dataConnectorStatus?: string;
  /**
   * @remarks
   * The collector type. Valid values:
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
   * The destination data source ID. This parameter is required only for synchronization.
   * 
   * @example
   * ds-5sfe68t122pxnti1cjpl
   */
  destDataSourceId?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of results to return when you use the NextToken-based pagination method. Valid values: 1 to 100. Default value: 50.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. You do not need to set this parameter for the first request or if no more results exist. If more results exist, set this parameter to the NextToken value returned by the previous API call.
   * 
   * @example
   * AAAAAUqcj6VO4E3ECWIrFczs****
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort field. Currently, only sorting by updateTime is supported. If OrderField is left empty, the default order returned by the database is used.
   * 
   * @example
   * Id
   */
  orderField?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - "asc": ascending order.
   * - "desc" (default): descending order.
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
   * The number of records per page. Default value: 1000.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the threat analysis data management center resides. Specify the management center region based on the region of your assets. Valid values:
   * - cn-hangzhou: The assets reside in the Chinese mainland.
   * - ap-southeast-1: The assets reside outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID that the administrator switches to when viewing as another member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The name of the Simple Log Service (SLS) data import job for the collector.
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

