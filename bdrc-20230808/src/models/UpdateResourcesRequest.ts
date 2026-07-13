// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The resource type. If this parameter is not specified, all types of resources are updated.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

