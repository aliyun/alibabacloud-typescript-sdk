// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateTemplateResponseBodyUpdateInfo extends $dara.Model {
  /**
   * @remarks
   * The parameters that can be modified.
   */
  parametersAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters whose changes cause service interruptions.
   * 
   * > - This parameter is supported only for a small number of resource types.
   * > - This parameter is valid only for updates on ROS stacks.
   */
  parametersCauseInterruptionIfModified?: string[];
  /**
   * @remarks
   * The parameters whose changes trigger replacement updates for resources.
   * 
   * > -  This parameter can be returned only if the value of UpdateInfoOptions contains EnableReplacement.
   * > -  This parameter is valid only for updates on ROS stacks.
   */
  parametersCauseReplacementIfModified?: string[];
  /**
   * @remarks
   * The parameters that can be modified under specific conditions.
   */
  parametersConditionallyAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters whose changes cause service interruptions under specific conditions.
   * 
   * > - This parameter is supported only for a small number of resource types.
   * > - This parameter is valid only for updates on ROS stacks.
   */
  parametersConditionallyCauseInterruptionIfModified?: string[];
  /**
   * @remarks
   * The parameters whose changes trigger replacement updates for resources under specific conditions.
   * 
   * > - This parameter can be returned only if the value of UpdateInfoOptions contains EnableReplacement.
   * > - This parameter is valid only for updates on ROS stacks.
   */
  parametersConditionallyCauseReplacementIfModified?: string[];
  /**
   * @remarks
   * The parameters that cannot be modified.
   */
  parametersNotAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters that can be modified under uncertain conditions.
   */
  parametersUncertainlyAllowedToBeModified?: string[];
  /**
   * @remarks
   * The parameters whose changes cause service interruptions under uncertain conditions.
   * 
   * > - This parameter is supported only for a small number of resource types.
   * > - This parameter is valid only for updates on ROS stacks.
   */
  parametersUncertainlyCauseInterruptionIfModified?: string[];
  /**
   * @remarks
   * The parameters whose changes trigger replacement updates for resources under uncertain conditions.
   * 
   * > -  This parameter can be returned only if the value of UpdateInfoOptions contains EnableReplacement.
   * > -  This parameter is valid only for updates on ROS stacks.
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

