// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EvaluatePreConfigRulesResponseBodyResourceEvaluations } from "./EvaluatePreConfigRulesResponseBodyResourceEvaluations";


export class EvaluatePreConfigRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 129ECF1C-7897-1131-BD0F-4B588AC05400
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the compliance evaluation result.
   */
  resourceEvaluations?: EvaluatePreConfigRulesResponseBodyResourceEvaluations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceEvaluations: 'ResourceEvaluations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceEvaluations: { 'type': 'array', 'itemType': EvaluatePreConfigRulesResponseBodyResourceEvaluations },
    };
  }

  validate() {
    if(Array.isArray(this.resourceEvaluations)) {
      $dara.Model.validateArray(this.resourceEvaluations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

