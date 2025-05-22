// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStackRequest extends $dara.Model {
  /**
   * @remarks
   * The options for deleting the stack.
   */
  deleteOptions?: string[];
  /**
   * @remarks
   * The maximum number of concurrent operations that can be performed on resources.
   * 
   * By default, this parameter is empty. You can set this parameter to an integer that is greater than or equal to 0.
   * 
   * 
   * 
   * > -  If you set this parameter to an integer that is greater than 0, the integer is used. If you set this parameter to 0 or leave this parameter empty, no limit is imposed on ROS stacks. However, the default value in Terraform is used for Terraform stacks. In most cases, the default value in Terraform is 10.
   * > -  If you set this parameter to a specific value, ROS associates the value with the stack. The value affects subsequent operations on the stack, such as an update operation.
   * 
   * @example
   * 1
   */
  parallelism?: number;
  /**
   * @remarks
   * The name of the RAM role. Resource Orchestration Service (ROS) assumes the RAM role to create the stack and uses the credentials of the role to call the APIs of Alibaba Cloud services.\\
   * ROS assumes the role to perform operations on the stack. If you have permissions to perform operations on the stack but do not have permissions to use the RAM role, ROS still assumes the RAM role. You must make sure that the least privileges are granted to the RAM role.\\
   * If you leave this parameter empty when you call the DeleteStack operation, ROS cannot assume the existing RAM role that is associated with the stack. If you want ROS to assume a RAM role, you must specify this parameter. If no RAM roles are available, ROS uses a temporary credential that is generated from the credentials of your account.\\
   * The name of the RAM role can be up to 64 bytes in length.
   * 
   * @example
   * test-role
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The region ID of the stack. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to retain all resources in the stack.
   * 
   * Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  retainAllResources?: boolean;
  /**
   * @remarks
   * The resources that you want to retain.
   * 
   * @example
   * WebServer
   */
  retainResources?: string[];
  /**
   * @remarks
   * The ID of the stack.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteOptions: 'DeleteOptions',
      parallelism: 'Parallelism',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      retainAllResources: 'RetainAllResources',
      retainResources: 'RetainResources',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteOptions: { 'type': 'array', 'itemType': 'string' },
      parallelism: 'number',
      ramRoleName: 'string',
      regionId: 'string',
      retainAllResources: 'boolean',
      retainResources: { 'type': 'array', 'itemType': 'string' },
      stackId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deleteOptions)) {
      $dara.Model.validateArray(this.deleteOptions);
    }
    if(Array.isArray(this.retainResources)) {
      $dara.Model.validateArray(this.retainResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

