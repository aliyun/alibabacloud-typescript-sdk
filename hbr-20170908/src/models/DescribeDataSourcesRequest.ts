// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataSourcesRequest extends $dara.Model {
  /**
   * @example
   * cl-0003jyv******fsku5m
   */
  clusterId?: string;
  /**
   * @example
   * ds-000******2nqeo
   */
  dataSourceId?: string;
  /**
   * @example
   * MyLocalNas
   */
  dataSourceName?: string;
  /**
   * @example
   * COMMON_NAS
   */
  dataSourceType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
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

