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

