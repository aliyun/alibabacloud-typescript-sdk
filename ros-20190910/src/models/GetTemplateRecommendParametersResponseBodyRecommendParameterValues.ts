// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateRecommendParametersResponseBodyRecommendParameterValues extends $dara.Model {
  parameterKey?: string;
  recommendValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      recommendValue: 'RecommendValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      recommendValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

