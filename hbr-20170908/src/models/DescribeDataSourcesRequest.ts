// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The client group ID used to access the data source.
   * 
   * @example
   * cl-0003jyv******fsku5m
   */
  clusterId?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * ds-000******2nqeo
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The data source name.
   * 
   * @example
   * MyLocalNas
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The data source type.
   * 
   * @example
   * COMMON_NAS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of data sources to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataSourceId: 'DataSourceId',
      dataSourceName: 'DataSourceName',
      dataSourceType: 'DataSourceType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataSourceId: 'string',
      dataSourceName: 'string',
      dataSourceType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

