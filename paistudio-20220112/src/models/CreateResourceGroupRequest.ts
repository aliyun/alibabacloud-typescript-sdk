// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateResourceGroupRequestTag } from "./CreateResourceGroupRequestTag";
import { UserVpc } from "./UserVpc";


export class CreateResourceGroupRequest extends $dara.Model {
  /**
   * @example
   * Ecs
   */
  computingResourceProvider?: string;
  /**
   * @example
   * test_api_report
   */
  description?: string;
  /**
   * @example
   * testResourceGroup
   */
  name?: string;
  /**
   * @example
   * Ecs
   */
  resourceType?: string;
  tag?: CreateResourceGroupRequestTag[];
  userVpc?: UserVpc;
  static names(): { [key: string]: string } {
    return {
      computingResourceProvider: 'ComputingResourceProvider',
      description: 'Description',
      name: 'Name',
      resourceType: 'ResourceType',
      tag: 'Tag',
      userVpc: 'UserVpc',
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

