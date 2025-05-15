// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceTemplateParameterConstraintsResponseBodyParameterConstraints } from "./GetServiceTemplateParameterConstraintsResponseBodyParameterConstraints";


export class GetServiceTemplateParameterConstraintsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The package family constraints.
   */
  familyConstraints?: string[];
  /**
   * @remarks
   * The constraints on the parameters.
   */
  parameterConstraints?: GetServiceTemplateParameterConstraintsResponseBodyParameterConstraints[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 449DC03D-A039-56A6-8D6F-6EBCCCE0EE2C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      familyConstraints: 'FamilyConstraints',
      parameterConstraints: 'ParameterConstraints',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      familyConstraints: { 'type': 'array', 'itemType': 'string' },
      parameterConstraints: { 'type': 'array', 'itemType': GetServiceTemplateParameterConstraintsResponseBodyParameterConstraints },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.familyConstraints)) {
      $dara.Model.validateArray(this.familyConstraints);
    }
    if(Array.isArray(this.parameterConstraints)) {
      $dara.Model.validateArray(this.parameterConstraints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

