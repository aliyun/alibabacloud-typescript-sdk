// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGadInstancesResponseBodyInstancesInstances extends $dara.Model {
  /**
   * @example
   * 2024-05-29 23:55:58
   */
  createTime?: number;
  /**
   * @example
   * MySQL
   */
  dbEngineType?: string;
  /**
   * @example
   * 2
   */
  dbInstanceCount?: number;
  /**
   * @example
   * rg-a76s8afa****
   */
  instanceId?: string;
  /**
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  instanceRegion?: string;
  /**
   * @example
   * DR
   */
  instanceType?: string;
  /**
   * @example
   * rm-sadfasfa****
   */
  masterDbInstanceId?: string;
  /**
   * @example
   * test
   */
  masterDbInstanceName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  masterDbInstanceRegion?: string;
  /**
   * @example
   * cn-hangzhou
   */
  masterDbInstanceZoneId?: string;
  /**
   * @example
   * rg-aekzq276dmnaxqa
   */
  resourceGroupId?: string;
  /**
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dbEngineType: 'DbEngineType',
      dbInstanceCount: 'DbInstanceCount',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceRegion: 'InstanceRegion',
      instanceType: 'InstanceType',
      masterDbInstanceId: 'MasterDbInstanceId',
      masterDbInstanceName: 'MasterDbInstanceName',
      masterDbInstanceRegion: 'MasterDbInstanceRegion',
      masterDbInstanceZoneId: 'MasterDbInstanceZoneId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dbEngineType: 'string',
      dbInstanceCount: 'number',
      instanceId: 'string',
      instanceName: 'string',
      instanceRegion: 'string',
      instanceType: 'string',
      masterDbInstanceId: 'string',
      masterDbInstanceName: 'string',
      masterDbInstanceRegion: 'string',
      masterDbInstanceZoneId: 'string',
      resourceGroupId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

