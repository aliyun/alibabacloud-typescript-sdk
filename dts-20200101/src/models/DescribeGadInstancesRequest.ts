// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGadInstancesRequest extends $dara.Model {
  dbEngineTypes?: string;
  /**
   * @remarks
   * The name of the active geo-redundancy instance group.
   * 
   * @example
   * test
   */
  instanceName?: string;
  masterDbInstanceId?: string;
  ownerId?: string;
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
   * The number of entries per page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. Specify this parameter to query instances in a specific region. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  slaveDbInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbEngineTypes: 'DbEngineTypes',
      instanceName: 'InstanceName',
      masterDbInstanceId: 'MasterDbInstanceId',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      slaveDbInstanceId: 'SlaveDbInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbEngineTypes: 'string',
      instanceName: 'string',
      masterDbInstanceId: 'string',
      ownerId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      slaveDbInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

