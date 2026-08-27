// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStackResponseBodyDryRunResult extends $dara.Model {
  /**
   * @remarks
   * The parameters that are allowed to be modified.
   */
  parametersAllowedToBeModified?: string[];
  /**
   * @remarks
   * The list of parameters that will definitely cause resource interruption.
   * > - Only a small number of resource types are supported.
   * > - This applies only to updating ROS stacks.
   */
  parametersCauseInterruptionIfModified?: string[];
  /**
   * @remarks
   * The list of parameters that will definitely cause resource replacement update.
   * 
   * > - This is returned only when ReplacementOption is set to Enabled.
   * > - This applies only to updating ROS stacks.
   */
  parametersCauseReplacementIfModified?: string[];
  /**
   * @remarks
   * The parameters that may be allowed to be modified.
   */
  parametersConditionallyAllowedToBeModified?: string[];
  /**
   * @remarks
   * The list of parameters that may cause resource interruption.
   * > - Only a small number of resource types are supported.
   * > - This applies only to updating ROS stacks.
   */
  parametersConditionallyCauseInterruptionIfModified?: string[];
  /**
   * @remarks
   * The list of parameters that may cause resource replacement update.
   * > - This is returned only when ReplacementOption is set to Enabled.
   * > - This applies only to updating ROS stacks.
   */
  parametersConditionallyCauseReplacementIfModified?: string[];
  /**
   * @remarks
   * The parameters that are not allowed to be modified.
   */
  parametersNotAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters that are uncertain to be allowed to be modified.
   */
  parametersUncertainlyAllowedToBeModified?: string[];
  /**
   * @remarks
   * The list of parameters that are uncertain to cause resource interruption.
   * > - Only a small number of resource types are supported.
   * > - This applies only to updating ROS stacks.
   */
  parametersUncertainlyCauseInterruptionIfModified?: string[];
  /**
   * @remarks
   * The list of parameters that are uncertain to cause resource replacement update.
   * 
   * > - This is returned only when ReplacementOption is set to Enabled.
   * > - This applies only to updating ROS stacks.
   */
  parametersUncertainlyCauseReplacementIfModified?: string[];
  static names(): { [key: string]: string } {
    return {
      parametersAllowedToBeModified: 'ParametersAllowedToBeModified',
      parametersCauseInterruptionIfModified: 'ParametersCauseInterruptionIfModified',
      parametersCauseReplacementIfModified: 'ParametersCauseReplacementIfModified',
      parametersConditionallyAllowedToBeModified: 'ParametersConditionallyAllowedToBeModified',
      parametersConditionallyCauseInterruptionIfModified: 'ParametersConditionallyCauseInterruptionIfModified',
      parametersConditionallyCauseReplacementIfModified: 'ParametersConditionallyCauseReplacementIfModified',
      parametersNotAllowedToBeModified: 'ParametersNotAllowedToBeModified',
      parametersUncertainlyAllowedToBeModified: 'ParametersUncertainlyAllowedToBeModified',
      parametersUncertainlyCauseInterruptionIfModified: 'ParametersUncertainlyCauseInterruptionIfModified',
      parametersUncertainlyCauseReplacementIfModified: 'ParametersUncertainlyCauseReplacementIfModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parametersAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersCauseInterruptionIfModified: { 'type': 'array', 'itemType': 'string' },
      parametersCauseReplacementIfModified: { 'type': 'array', 'itemType': 'string' },
      parametersConditionallyAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersConditionallyCauseInterruptionIfModified: { 'type': 'array', 'itemType': 'string' },
      parametersConditionallyCauseReplacementIfModified: { 'type': 'array', 'itemType': 'string' },
      parametersNotAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersUncertainlyAllowedToBeModified: { 'type': 'array', 'itemType': 'string' },
      parametersUncertainlyCauseInterruptionIfModified: { 'type': 'array', 'itemType': 'string' },
      parametersUncertainlyCauseReplacementIfModified: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.parametersAllowedToBeModified)) {
      $dara.Model.validateArray(this.parametersAllowedToBeModified);
    }
    if(Array.isArray(this.parametersCauseInterruptionIfModified)) {
      $dara.Model.validateArray(this.parametersCauseInterruptionIfModified);
    }
    if(Array.isArray(this.parametersCauseReplacementIfModified)) {
      $dara.Model.validateArray(this.parametersCauseReplacementIfModified);
    }
    if(Array.isArray(this.parametersConditionallyAllowedToBeModified)) {
      $dara.Model.validateArray(this.parametersConditionallyAllowedToBeModified);
    }
    if(Array.isArray(this.parametersConditionallyCauseInterruptionIfModified)) {
      $dara.Model.validateArray(this.parametersConditionallyCauseInterruptionIfModified);
    }
    if(Array.isArray(this.parametersConditionallyCauseReplacementIfModified)) {
      $dara.Model.validateArray(this.parametersConditionallyCauseReplacementIfModified);
    }
    if(Array.isArray(this.parametersNotAllowedToBeModified)) {
      $dara.Model.validateArray(this.parametersNotAllowedToBeModified);
    }
    if(Array.isArray(this.parametersUncertainlyAllowedToBeModified)) {
      $dara.Model.validateArray(this.parametersUncertainlyAllowedToBeModified);
    }
    if(Array.isArray(this.parametersUncertainlyCauseInterruptionIfModified)) {
      $dara.Model.validateArray(this.parametersUncertainlyCauseInterruptionIfModified);
    }
    if(Array.isArray(this.parametersUncertainlyCauseReplacementIfModified)) {
      $dara.Model.validateArray(this.parametersUncertainlyCauseReplacementIfModified);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The validation result. This parameter is returned only when DryRun is set to true.
   */
  dryRunResult?: UpdateStackResponseBodyDryRunResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRunResult: 'DryRunResult',
      requestId: 'RequestId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunResult: UpdateStackResponseBodyDryRunResult,
      requestId: 'string',
      stackId: 'string',
    };
  }

  validate() {
    if(this.dryRunResult && typeof (this.dryRunResult as any).validate === 'function') {
      (this.dryRunResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

