// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateRecommendParametersRequestParameters extends $dara.Model {
  parameterCandidateValues?: string[];
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterCandidateValues: 'ParameterCandidateValues',
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterCandidateValues: { 'type': 'array', 'itemType': 'string' },
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameterCandidateValues)) {
      $dara.Model.validateArray(this.parameterCandidateValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateRecommendParametersRequest extends $dara.Model {
  clientToken?: string;
  parameters?: GetTemplateRecommendParametersRequestParameters[];
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  templateBody?: string;
  templateId?: string;
  templateURL?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      parameters: 'Parameters',
      regionId: 'RegionId',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      parameters: { 'type': 'array', 'itemType': GetTemplateRecommendParametersRequestParameters },
      regionId: 'string',
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

