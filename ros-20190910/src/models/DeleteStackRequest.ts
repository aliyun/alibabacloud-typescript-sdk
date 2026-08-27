// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStackRequest extends $dara.Model {
  /**
   * @remarks
   * Stack deletion options.
   */
  deleteOptions?: string[];
  /**
   * @remarks
   * Maximum number of concurrent resource operations.
   * 
   * Default: empty. Accepts an integer >= 0.
   * 
   * > - A value greater than 0 is used as-is. A value of 0 or empty imposes no limit on ROS stacks. For Terraform stacks, the Terraform default (typically 10) applies.
   * >
   * > - This value persists on the stack and affects subsequent operations such as updates.
   * 
   * @example
   * 1
   */
  parallelism?: number;
  /**
   * @remarks
   * The RAM role name. ROS assumes this role to create the stack and call Alibaba Cloud service APIs.<br> Even if you have stack operation permissions but lack RAM role permissions, ROS still assumes the role. Ensure the role follows the least-privilege principle.<br> If empty, ROS cannot assume the existing RAM role associated with the stack. To have ROS assume a role, specify this parameter. If no RAM role is available, ROS uses a temporary credential from your account credentials.<br> Maximum length: 64 bytes.
   * 
   * @example
   * test-role
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The region ID of the stack. Call [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) to query available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Whether to retain all resources in the stack.
   * 
   * Valid values:
   * 
   * - true
   * 
   * - false (default)
   * 
   * @example
   * false
   */
  retainAllResources?: boolean;
  /**
   * @remarks
   * Resources to retain.
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

