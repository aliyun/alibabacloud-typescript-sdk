// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UserVpc } from "./UserVpc";


export class CreateResourceGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance. The value of N ranges from 1 to 20.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance. The value of N ranges from 1 to 20.
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
   * The compute resource type of the ResourceGroup.
   * 
   * @example
   * Ecs
   */
  computingResourceProvider?: string;
  /**
   * @remarks
   * The description of the ResourceGroup.
   * 
   * @example
   * test_api_report
   */
  description?: string;
  /**
   * @remarks
   * The name of the ResourceGroup.
   * 
   * @example
   * testResourceGroup
   */
  name?: string;
  /**
   * @remarks
   * The resource type list. Valid values:
   * 
   * - Ecs: general computing resources
   * - Lingjun: Lingjun AI Compute resources
   * 
   * @example
   * Ecs
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tags to add, containing up to 20 entries.
   */
  tag?: CreateResourceGroupRequestTag[];
  /**
   * @remarks
   * The VPC peering information of the ResourceGroup.
   */
  userVpc?: UserVpc;
  /**
   * @remarks
   * The resource group version. This parameter only takes effect when the resource type is ECS.
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

