// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinates } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinates";


export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceability extends $dara.Model {
  coordinates?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinates[];
  /**
   * @example
   * 0.9
   */
  duplicate?: number;
  static names(): { [key: string]: string } {
    return {
      coordinates: 'Coordinates',
      duplicate: 'Duplicate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinates: { 'type': 'array', 'itemType': RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinates },
      duplicate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.coordinates)) {
      $dara.Model.validateArray(this.coordinates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

