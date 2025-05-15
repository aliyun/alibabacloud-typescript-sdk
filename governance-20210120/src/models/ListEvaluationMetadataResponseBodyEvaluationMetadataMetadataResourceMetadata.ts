// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataResourceMetadataResourcePropertyMetadata } from "./ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataResourceMetadataResourcePropertyMetadata";


export class ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataResourceMetadata extends $dara.Model {
  /**
   * @remarks
   * The metadata of the resource properties.
   */
  resourcePropertyMetadata?: ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataResourceMetadataResourcePropertyMetadata[];
  static names(): { [key: string]: string } {
    return {
      resourcePropertyMetadata: 'ResourcePropertyMetadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcePropertyMetadata: { 'type': 'array', 'itemType': ListEvaluationMetadataResponseBodyEvaluationMetadataMetadataResourceMetadataResourcePropertyMetadata },
    };
  }

  validate() {
    if(Array.isArray(this.resourcePropertyMetadata)) {
      $dara.Model.validateArray(this.resourcePropertyMetadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

