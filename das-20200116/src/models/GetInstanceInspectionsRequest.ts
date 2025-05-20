// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceInspectionsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1655427625000
   */
  endTime?: string;
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * *   **MySQL**
   * *   **Redis**
   * *   **PolarDBMySQL**
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The type of the instance on which the database is deployed. Valid values:
   * 
   * *   **RDS**: an Alibaba Cloud database instance.
   * *   **ECS**: an ECS instance on which a self-managed database is deployed.
   * *   **IDC**: a self-managed database instance that is not deployed on Alibaba Cloud.
   * 
   * >  The value IDC specifies that the instance is deployed in a data center.
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  instanceArea?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2eil6npi****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The filter condition, which can be specified in one of the following formats:
   * 
   * *   Specify the ID of a single instance in the {"InstanceId":"Instance ID"} format.
   * *   Specify the IDs of multiple instances in the {"InstanceIds":["Instance ID1","Instance ID2"]} format. Separate the instance IDs with commas (,).
   * *   Specify the region in which the instance resides in the {"region":"Region of the instance"} format.
   * 
   * @example
   * {"InstanceId":"rm-bp10usoc1erj7****"}
   */
  searchMap?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1655416825000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      engine: 'Engine',
      instanceArea: 'InstanceArea',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      searchMap: 'SearchMap',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      engine: 'string',
      instanceArea: 'string',
      pageNo: 'string',
      pageSize: 'string',
      resourceGroupId: 'string',
      searchMap: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

