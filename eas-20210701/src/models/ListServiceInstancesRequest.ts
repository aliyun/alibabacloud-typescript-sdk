// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword used to query instances. Instances can be queried based on instance name, instance IP address, IP address of the server where the instance resides, and instance type.
   * 
   * @example
   * 10.118.xx.xx
   */
  filter?: string;
  /**
   * @remarks
   * The IP address of the server where the instance resides.
   * 
   * @example
   * 10.224.xx.xx
   */
  hostIP?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 10.224.xx.xx
   */
  instanceIP?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * foo-bdc5xxxx-8l7rk
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance state.
   * 
   * @example
   * Running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs.c7.large
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether the instance is a preemptible instance.
   * 
   * @example
   * false
   */
  isSpot?: boolean;
  /**
   * @remarks
   * The sorting order.
   * 
   * Valid values:
   * 
   * *   asc
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     The instances are sorted in ascending order.
   * 
   * *   desc
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     The instances are sorted in descending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the resource group to which the instance belongs.
   * 
   * Valid values:
   * 
   * *   PublicResource
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DedicatedResource
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * PublicResource
   */
  resourceType?: string;
  /**
   * @remarks
   * The service role.
   * 
   * Valid values:
   * 
   * *   DataSet
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     dataset service
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   SDProxy
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     Stable-Diffusion proxy service
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Standard
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     standard service
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Queue
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     queue service
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * Queue
   */
  role?: string;
  /**
   * @remarks
   * The field that you use to sort the query results.
   * 
   * *   Set the value to StartTime.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     The value specifies that the query results are sorted based on the time when the instances were created
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * StartTime
   */
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      hostIP: 'HostIP',
      instanceIP: 'InstanceIP',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      isSpot: 'IsSpot',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
      role: 'Role',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      hostIP: 'string',
      instanceIP: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      isSpot: 'boolean',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceType: 'string',
      role: 'string',
      sort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

