// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UserVpc } from "./UserVpc";


export class CreateResourceGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance. N ranges from 1 to 20.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * Tag value for the resource group. N ranges from 1 to 20.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Compute resource type for the resource group.
   * 
   * @example
   * Ecs
   */
  computingResourceProvider?: string;
  /**
   * @remarks
   * Resource group description.
   * 
   * @example
   * test_api_report
   */
  description?: string;
  /**
   * @remarks
   * Resource group name.
   * 
   * @example
   * testResourceGroup
   */
  name?: string;
  /**
   * @remarks
   * Resource type. Valid values:
   * 
   * - Ecs: general computing resources
   * 
   * - Lingjun: Lingjun resources
   * 
   * @example
   * Ecs
   */
  resourceType?: string;
  /**
   * @remarks
   * List of tags to add. Maximum 20 items.
   */
  tag?: CreateResourceGroupRequestTag[];
  /**
   * @remarks
   * VPC connectivity information for the resource group.
   */
  userVpc?: UserVpc;
  /**
   * @remarks
   * Resource group version. This parameter takes effect only when the resource type is ECS.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      computingResourceProvider: 'ComputingResourceProvider',
      description: 'Description',
      name: 'Name',
      resourceType: 'ResourceType',
      tag: 'Tag',
      userVpc: 'UserVpc',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computingResourceProvider: 'string',
      description: 'string',
      name: 'string',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': CreateResourceGroupRequestTag },
      userVpc: UserVpc,
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(this.userVpc && typeof (this.userVpc as any).validate === 'function') {
      (this.userVpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

