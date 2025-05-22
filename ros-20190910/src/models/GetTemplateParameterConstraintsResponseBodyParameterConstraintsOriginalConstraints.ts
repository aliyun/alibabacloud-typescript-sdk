// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints extends $dara.Model {
  /**
   * @remarks
   * The values of the parameter.
   */
  allowedValues?: any[];
  /**
   * @remarks
   * Behavior of the parameter
   * 
   * @example
   * QueryError
   */
  behavior?: string;
  /**
   * @remarks
   * The reason for the parameter behavior
   * 
   * @example
   * No resource property refer to the parameter
   */
  behaviorReason?: string;
  propertiesData?: string;
  /**
   * @remarks
   * The name of the resource property.
   * 
   * @example
   * ZoneId
   */
  propertyName?: string;
  requestInfo?: string;
  /**
   * @remarks
   * The name of the resource that is defined in the template.
   * 
   * @example
   * MyECS
   */
  resourceName?: string;
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
      allowedValues: 'AllowedValues',
      behavior: 'Behavior',
      behaviorReason: 'BehaviorReason',
      propertiesData: 'PropertiesData',
      propertyName: 'PropertyName',
      requestInfo: 'RequestInfo',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedValues: { 'type': 'array', 'itemType': 'any' },
      behavior: 'string',
      behaviorReason: 'string',
      propertiesData: 'string',
      propertyName: 'string',
      requestInfo: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedValues)) {
      $dara.Model.validateArray(this.allowedValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

