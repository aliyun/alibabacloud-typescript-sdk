// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrdersRequest extends $dara.Model {
  /**
   * @remarks
   * The [edition](https://help.aliyun.com/document_detail/183258.html) of the cluster. Valid values:
   * 
   * - **Normal**: Cluster Edition
   * 
   * - **Basic**: single node
   * 
   * - **Archive**: X-Engine
   * 
   * - **NormalMultimaster**: Multi-master Cluster Edition
   * 
   * - **SENormal**: Standard Edition
   * 
   * > * The single node edition is not supported on PolarDB for PostgreSQL clusters that run PostgreSQL 11.
   * >
   * > * The Standard Edition is supported on PolarDB for MySQL clusters that run MySQL 8.0 or 5.7, and on PolarDB for PostgreSQL clusters that run PostgreSQL 14.
   * >
   * > * PolarDB for MySQL clusters that run MySQL 8.0 support X-Engine and the Multi-master Cluster Edition.
   * 
   * @example
   * Normal
   */
  category?: string;
  /**
   * @remarks
   * The ID of the current instance.
   * 
   * @example
   * pc-2zed3m89cw***
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries to return for the current request. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. If the query results are not returned in a single call, this token is returned. Use this token in a subsequent call to retrieve the remaining results.
   * 
   * @example
   * 212db86sca4384811e0b5e8707e******
   */
  nextToken?: string;
  /**
   * @remarks
   * The status of the order.
   * 
   * - **pending**: The task is waiting to start.
   * 
   * - **create**: The order is placed and is being processed.
   * 
   * - **fail**: The instance failed to be created.
   * 
   * - **cancel**: The order is canceled.
   * 
   * - **success**: The instance is created.
   * 
   * @example
   * success
   */
  orderStatus?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * polardb
   */
  productCode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > Call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to view the details of regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderStatus: 'OrderStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productCode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

