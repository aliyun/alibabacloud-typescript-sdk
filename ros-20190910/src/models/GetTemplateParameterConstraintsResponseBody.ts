// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTemplateParameterConstraintsResponseBodyParameterConstraints } from "./GetTemplateParameterConstraintsResponseBodyParameterConstraints";


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

