// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMonitorGroupInstancesRequestInstances extends $dara.Model {
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * To obtain the abbreviation of an Alibaba Cloud service name, call the [DescribeProjectMeta](https://help.aliyun.com/document_detail/114916.html) operation. The `metricCategory` tag in the `Labels` response parameter indicates the abbreviation of the Alibaba Cloud service name.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  category?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-2ze26xj5wwy12****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-instance-ecs
   */
  instanceName?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMonitorGroupInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * 3607****
   */
  groupId?: string;
  /**
   * @remarks
   * The instances that you want to add to the application group.
   * 
   * This parameter is required.
   */
  instances?: CreateMonitorGroupInstancesRequestInstances[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instances: 'Instances',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instances: { 'type': 'array', 'itemType': CreateMonitorGroupInstancesRequestInstances },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

