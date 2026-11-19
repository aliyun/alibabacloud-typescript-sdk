// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMonitorGroupInstancesRequestInstances extends $dara.Model {
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * For more information about how to obtain the abbreviation of the Alibaba Cloud service name, see the `metricCategory` field in the `Labels` response parameter of the [DescribeProjectMeta](https://help.aliyun.com/document_detail/114916.html) operation.
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
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * test-instance-ecs
   */
  instanceName?: string;
  /**
   * @remarks
   * The region where the instance resides.
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see How to ensure idempotence.
   * 
   * @example
   * 6868E9A1-56E6-5FD7-9684-E2963BBAFB5F
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only perform a dry run on the request. Valid values:
   * - **true**: sends a check request and does not bind security groups to instances. The check items include whether required parameters are specified, the request format, and service limits. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
   * - **false** (default): sends a regular request. If the check succeeds, an HTTP 2xx status code is returned and the operation is directly performed.
   * 
   * @example
   * false
   */
  dryRun?: string;
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
   * The list of instances.
   * 
   * This parameter is required.
   */
  instances?: CreateMonitorGroupInstancesRequestInstances[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      groupId: 'GroupId',
      instances: 'Instances',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'string',
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

