// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTemplateRecommendParametersResponseBodyRecommendParameterValues } from "./GetTemplateRecommendParametersResponseBodyRecommendParameterValues";


export class GetTemplateRecommendParametersResponseBody extends $dara.Model {
  recommendParameterValues?: GetTemplateRecommendParametersResponseBodyRecommendParameterValues[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recommendParameterValues: 'RecommendParameterValues',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recommendParameterValues: { 'type': 'array', 'itemType': GetTemplateRecommendParametersResponseBodyRecommendParameterValues },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.recommendParameterValues)) {
      $dara.Model.validateArray(this.recommendParameterValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

