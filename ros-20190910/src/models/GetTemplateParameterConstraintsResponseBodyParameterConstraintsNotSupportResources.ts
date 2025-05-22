// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateParameterConstraintsResponseBodyParameterConstraintsNotSupportResources extends $dara.Model {
  /**
   * @remarks
   * The name of the resource property.
   * 
   * @example
   * InstanceName
   */
  propertyName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ECS::InstanceGroup
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      propertyName: 'PropertyName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyName: 'string',
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

