// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceTemplateParameterConstraintsResponseBodyParameterConstraints } from "./GetServiceTemplateParameterConstraintsResponseBodyParameterConstraints";


export class GetServiceTemplateParameterConstraintsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The constraint families.
   */
  familyConstraints?: string[];
  /**
   * @remarks
   * The parameters in the template.
   */
  parameterConstraints?: GetServiceTemplateParameterConstraintsResponseBodyParameterConstraints[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C81C0732-DEBC-559C-B563-7EB2BEB21088
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

