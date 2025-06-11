// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the OceanBase cluster. It must be 1 to 20 characters in length. If this parameter is not specified, the value is the instance ID of the cluster by default.
   * 
   * @example
   * ob4prod
   */
  instanceName?: string;
  /**
   * @remarks
   * The number of the page to return.
   * - Pages start from page 1.
   * - Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows to return on each page.
   * - Maximum value: 100.
   * - Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group. If you do not specify this parameter, all resources are returned.
   * 
   * @example
   * group1
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The keyword for fuzzy search, which can be an instance ID, instance name, tenant ID, or tenant name.
   * 
   * @example
   * pay
   */
  searchKey?: string;
  withOBCloudInstances?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      searchKey: 'SearchKey',
      withOBCloudInstances: 'WithOBCloudInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      searchKey: 'string',
      withOBCloudInstances: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

