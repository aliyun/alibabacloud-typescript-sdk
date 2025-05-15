// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints } from "./GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints";
import { GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsQueryErrors } from "./GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsQueryErrors";


export class GetServiceTemplateParameterConstraintsResponseBodyParameterConstraints extends $dara.Model {
  /**
   * @remarks
   * The valid values of the parameter.
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
   * >  If AllowedValues is not returned, Behavior and BehaviorReason are returned, which indicate the behavior of the parameter and the reason for the behavior.
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
   * The original constraint information.
   */
  originalConstraints?: GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints[];
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
   * The error details that are returned if the request fails.
   */
  queryErrors?: GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsQueryErrors[];
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
      originalConstraints: 'OriginalConstraints',
      parameterKey: 'ParameterKey',
      queryErrors: 'QueryErrors',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedValues: { 'type': 'array', 'itemType': 'string' },
      associationParameterNames: { 'type': 'array', 'itemType': 'string' },
      behavior: 'string',
      behaviorReason: 'string',
      originalConstraints: { 'type': 'array', 'itemType': GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsOriginalConstraints },
      parameterKey: 'string',
      queryErrors: { 'type': 'array', 'itemType': GetServiceTemplateParameterConstraintsResponseBodyParameterConstraintsQueryErrors },
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
    if(Array.isArray(this.originalConstraints)) {
      $dara.Model.validateArray(this.originalConstraints);
    }
    if(Array.isArray(this.queryErrors)) {
      $dara.Model.validateArray(this.queryErrors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

