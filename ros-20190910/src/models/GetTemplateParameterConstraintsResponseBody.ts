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

export class GetTemplateParameterConstraintsResponseBodyParameterConstraintsQueryErrors extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ALIYUN::ECS::InstanceGroup
   */
  errorMessage?: string;
  /**
   * @remarks
   * The resource name.
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
   * InstanceType is needed while query DataDisk
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      resourceName: 'string',
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

export class GetTemplateParameterConstraintsResponseBodyParameterConstraintsQueryTimeoutDetails extends $dara.Model {
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * query property SlaveZoneIds.* in resource rds error, error message: query 8 seconds timeout
   */
  errorMessage?: string;
  /**
   * @remarks
   * Resource name.
   * 
   * @example
   * rds
   */
  resourceName?: string;
  /**
   * @remarks
   * Resource type.
   * 
   * @example
   * ALIYUN::RDS::DBInstance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      resourceName: 'string',
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

export class GetTemplateParameterConstraintsResponseBodyParameterConstraints extends $dara.Model {
  /**
   * @remarks
   * The values of the parameter.
   */
  allowedValues?: string[];
  /**
   * @remarks
   * The names of the associated parameters.
   */
  associationParameterNames?: string[];
  /**
   * @remarks
   * The behavior of the parameter. Valid values:
   * 
   * *   NoLimit: No limit is imposed on the value of this parameter.
   * *   NotSupport: The value of this parameter cannot be queried.
   * *   QueryError: This parameter failed to be queried.
   * 
   * > If AllowedValues is not returned, Behavior and BehaviorReason are returned.
   * 
   * @example
   * NoLimit
   */
  behavior?: string;
  /**
   * @remarks
   * The reason why the behavior of the parameter is returned.
   * 
   * @example
   * No resource property refer to the parameter
   */
  behaviorReason?: string;
  /**
   * @remarks
   * The values that do not conform to the parameter constraints.
   * 
   * > If AllowedValues is returned, IllegalValueByParameterConstraints and IllegalValueByRules are returned at the same time.
   */
  illegalValueByParameterConstraints?: any[];
  /**
   * @remarks
   * The values that do not match the rules in the template.
   * 
   * > If AllowedValues is returned, IllegalValueByParameterConstraints and IllegalValueByRules are returned at the same time.
   */
  illegalValueByRules?: any[];
  /**
   * @remarks
   * The unsupported resource in the template.
   */
  notSupportResources?: GetTemplateParameterConstraintsResponseBodyParameterConstraintsNotSupportResources[];
  /**
   * @remarks
   * The original constraint information.
   */
  originalConstraints?: GetTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints[];
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * ZoneInfo
   */
  parameterKey?: string;
  /**
   * @remarks
   * The error that is returned when the request fails.
   */
  queryErrors?: GetTemplateParameterConstraintsResponseBodyParameterConstraintsQueryErrors[];
  /**
   * @remarks
   * Query the details of timeout.
   */
  queryTimeoutDetails?: GetTemplateParameterConstraintsResponseBodyParameterConstraintsQueryTimeoutDetails[];
  /**
   * @remarks
   * The data type of the parameter.
   * 
   * @example
   * String
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      allowedValues: 'AllowedValues',
      associationParameterNames: 'AssociationParameterNames',
      behavior: 'Behavior',
      behaviorReason: 'BehaviorReason',
      illegalValueByParameterConstraints: 'IllegalValueByParameterConstraints',
      illegalValueByRules: 'IllegalValueByRules',
      notSupportResources: 'NotSupportResources',
      originalConstraints: 'OriginalConstraints',
      parameterKey: 'ParameterKey',
      queryErrors: 'QueryErrors',
      queryTimeoutDetails: 'QueryTimeoutDetails',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedValues: { 'type': 'array', 'itemType': 'string' },
      associationParameterNames: { 'type': 'array', 'itemType': 'string' },
      behavior: 'string',
      behaviorReason: 'string',
      illegalValueByParameterConstraints: { 'type': 'array', 'itemType': 'any' },
      illegalValueByRules: { 'type': 'array', 'itemType': 'any' },
      notSupportResources: { 'type': 'array', 'itemType': GetTemplateParameterConstraintsResponseBodyParameterConstraintsNotSupportResources },
      originalConstraints: { 'type': 'array', 'itemType': GetTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints },
      parameterKey: 'string',
      queryErrors: { 'type': 'array', 'itemType': GetTemplateParameterConstraintsResponseBodyParameterConstraintsQueryErrors },
      queryTimeoutDetails: { 'type': 'array', 'itemType': GetTemplateParameterConstraintsResponseBodyParameterConstraintsQueryTimeoutDetails },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedValues)) {
      $dara.Model.validateArray(this.allowedValues);
    }
    if(Array.isArray(this.associationParameterNames)) {
      $dara.Model.validateArray(this.associationParameterNames);
    }
    if(Array.isArray(this.illegalValueByParameterConstraints)) {
      $dara.Model.validateArray(this.illegalValueByParameterConstraints);
    }
    if(Array.isArray(this.illegalValueByRules)) {
      $dara.Model.validateArray(this.illegalValueByRules);
    }
    if(Array.isArray(this.notSupportResources)) {
      $dara.Model.validateArray(this.notSupportResources);
    }
    if(Array.isArray(this.originalConstraints)) {
      $dara.Model.validateArray(this.originalConstraints);
    }
    if(Array.isArray(this.queryErrors)) {
      $dara.Model.validateArray(this.queryErrors);
    }
    if(Array.isArray(this.queryTimeoutDetails)) {
      $dara.Model.validateArray(this.queryTimeoutDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateParameterConstraintsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The constraints of the parameters.
   */
  parameterConstraints?: GetTemplateParameterConstraintsResponseBodyParameterConstraints[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9816785B-BCF8-514D-8B76-C1EC2BC954FC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameterConstraints: 'ParameterConstraints',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterConstraints: { 'type': 'array', 'itemType': GetTemplateParameterConstraintsResponseBodyParameterConstraints },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameterConstraints)) {
      $dara.Model.validateArray(this.parameterConstraints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

