// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplateScratchesResponseBodyTemplateScratchesSourceResources extends $dara.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * vpc-m5eauuq80anx59v28****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ECS::VPC
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
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

