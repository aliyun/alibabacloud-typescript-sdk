// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEvaluationMetadataResponseBodyEvaluationMetadataMetadata } from "./ListEvaluationMetadataResponseBodyEvaluationMetadataMetadata";


export class ListEvaluationMetadataResponseBodyEvaluationMetadata extends $dara.Model {
  /**
   * @remarks
   * The metadata objects of a specific metadata type.
   */
  metadata?: ListEvaluationMetadataResponseBodyEvaluationMetadataMetadata[];
  /**
   * @remarks
   * The type of the metadata. Valid values:
   * 
   * *   Metric: the check item
   * 
   * @example
   * Metric
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'Metadata',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: { 'type': 'array', 'itemType': ListEvaluationMetadataResponseBodyEvaluationMetadataMetadata },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metadata)) {
      $dara.Model.validateArray(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

