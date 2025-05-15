// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadataRemediation } from "./ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadataRemediation";


export class ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadata extends $dara.Model {
  /**
   * @remarks
   * The fixing items.
   */
  remediation?: ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadataRemediation[];
  static names(): { [key: string]: string } {
    return {
      remediation: 'Remediation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediation: { 'type': 'array', 'itemType': ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataRemediationMetadataRemediation },
    };
  }

  validate() {
    if(Array.isArray(this.remediation)) {
      $dara.Model.validateArray(this.remediation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

