// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEvaluationMetadataResponseBodyEvaluationMetadata } from "./ListEvaluationMetadataResponseBodyEvaluationMetadata";


export class ListEvaluationMetadataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metadata of a governance maturity check.
   */
  evaluationMetadata?: ListEvaluationMetadataResponseBodyEvaluationMetadata[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16B208DD-86BD-5E7D-AC93-FFD44B6FBDF1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      evaluationMetadata: 'EvaluationMetadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationMetadata: { 'type': 'array', 'itemType': ListEvaluationMetadataResponseBodyEvaluationMetadata },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.evaluationMetadata)) {
      $dara.Model.validateArray(this.evaluationMetadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

