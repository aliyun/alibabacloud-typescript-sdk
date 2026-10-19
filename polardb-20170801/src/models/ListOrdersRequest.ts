// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrdersRequest extends $dara.Model {
  /**
   * @remarks
   * The [product edition](https://help.aliyun.com/document_detail/183258.html). Valid values:
   * * **Normal**: Cluster Edition.
   * * **Basic**: Single Node Edition.
   * * **Archive**: X-Engine (Warm Data).
   * * **NormalMultimaster**: Multi-master Cluster Edition.
   * * **SENormal**: Standard Edition.
   * 
   * > * PolarDB for PostgreSQL 11 does not support Single Node Edition.
   * >* PolarDB for MySQL 8.0, PolarDB for MySQL 5.7, and PolarDB for PostgreSQL 14 support Standard Edition.
   * >* PolarDB for MySQL 8.0 supports X-Engine (Warm Data) and Multi-master Cluster Edition.
   * 
   * @example
   * Normal
   */
  category?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pc-2zed3m89cw***
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used to retrieve more results. If a single request does not return all results, this parameter is returned. You can pass the returned token in a subsequent request to continue retrieving results.
   * 
   * @example
   * 212db86sca4384811e0b5e8707e******
   */
  nextToken?: string;
  /**
   * @remarks
   * The order status. Valid values:
   * 
   * - **pending**: The task is waiting to start.
   * 
   * - **create**: The order has been placed and entered the production process.
   * 
   * - **fail**: Production failed.
   * 
   * - **cancel**: The order is canceled.
   * 
   * - **success**: Production succeeded.
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
   * The number of entries per page. Valid values:
   * * **30**
   * * **50**
   * * **100**
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
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query region information.
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

