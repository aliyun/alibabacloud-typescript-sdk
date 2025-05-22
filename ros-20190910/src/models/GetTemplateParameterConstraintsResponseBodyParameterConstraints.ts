// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTemplateParameterConstraintsResponseBodyParameterConstraintsNotSupportResources } from "./GetTemplateParameterConstraintsResponseBodyParameterConstraintsNotSupportResources";
import { GetTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints } from "./GetTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints";
import { GetTemplateParameterConstraintsResponseBodyParameterConstraintsQueryErrors } from "./GetTemplateParameterConstraintsResponseBodyParameterConstraintsQueryErrors";
import { GetTemplateParameterConstraintsResponseBodyParameterConstraintsQueryTimeoutDetails } from "./GetTemplateParameterConstraintsResponseBodyParameterConstraintsQueryTimeoutDetails";


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

