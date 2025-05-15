// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContinueDeployServiceInstanceResponseBodyDryRunResult extends $dara.Model {
  /**
   * @remarks
   * The parameters that can be modified. The operation that is performed to modify the parameters does not cause a validation error.
   * 
   * > This parameter is returned only if DryRun is set to true.
   */
  parametersAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters that can be modified under specific conditions. The new values of the parameters determine whether the operation that is performed to modify the parameters causes a validation error.
   * 
   * > This parameter is returned only if DryRun is set to true.
   */
  parametersConditionallyAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters that cannot be modified. The operation that is performed to modify the parameters causes a validation error.
   * 
   * > This parameter is returned only if DryRun is set to true.
   */
  parametersNotAllowedToBeModified?: string[];
  static names(): { [key: string]: string } {
    return {
      parametersAllowedToBeModified: 'ParametersAllowedToBeModified',
      parametersConditionallyAllowedToBeModified: 'ParametersConditionallyAllowedToBeModified',
      parametersNotAllowedToBeModified: 'ParametersNotAllowedToBeModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parametersAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersConditionallyAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersNotAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.parametersAllowedToBeModified)) {
      $dara.Model.validateArray(this.parametersAllowedToBeModified);
    }
    if(Array.isArray(this.parametersConditionallyAllowedToBeModified)) {
      $dara.Model.validateArray(this.parametersConditionallyAllowedToBeModified);
    }
    if(Array.isArray(this.parametersNotAllowedToBeModified)) {
      $dara.Model.validateArray(this.parametersNotAllowedToBeModified);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

