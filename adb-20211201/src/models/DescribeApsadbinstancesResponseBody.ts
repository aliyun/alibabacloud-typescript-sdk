// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAPSADBInstancesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The specifications of reserved compute resources.
   * 
   * @example
   * 16ACU
   */
  computeResource?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * adb_test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (3.0) cluster.
   * 
   * @example
   * am-bp1********
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The status of the cluster.
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The remaining allocatable reserved compute resources of the cluster.
   * 
   * @example
   * 24ACU
   */
  reservedACU?: string;
  /**
   * @remarks
   * The specifications of reserved storage resources.
   * 
   * @example
   * 24ACU
   */
  storageResource?: number;
  /**
   * @remarks
   * The zone ID of the cluster.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'ComputeResource',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterStatus: 'DBClusterStatus',
      reservedACU: 'ReservedACU',
      storageResource: 'StorageResource',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterStatus: 'string',
      reservedACU: 'string',
      storageResource: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAPSADBInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code or POP error code.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of items.
   * 
   * @example
   * [{"DBClusterId":"amv-example","DBClusterDescription":"Example cluster"}]
   */
  items?: DescribeAPSADBInstancesResponseBodyItems[];
  /**
   * @remarks
   * The additional information about the call result. Valid values:
   * - If the request is normal, **Success** is returned. 
   * - If the request is abnormal, a specific error code is returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 12345678-1234-4ABC-8DEF-123456789012
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 100
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': DescribeAPSADBInstancesResponseBodyItems },
      message: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

