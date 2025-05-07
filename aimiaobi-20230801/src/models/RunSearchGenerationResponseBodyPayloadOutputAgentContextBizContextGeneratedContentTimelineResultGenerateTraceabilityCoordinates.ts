// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinatesGenerateCoordinate } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinatesGenerateCoordinate";
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinatesNewsCoordinate } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinatesNewsCoordinate";


export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinates extends $dara.Model {
  generateCoordinate?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinatesGenerateCoordinate;
  newsCoordinate?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinatesNewsCoordinate;
  static names(): { [key: string]: string } {
    return {
      generateCoordinate: 'GenerateCoordinate',
      newsCoordinate: 'NewsCoordinate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateCoordinate: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinatesGenerateCoordinate,
      newsCoordinate: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinatesNewsCoordinate,
    };
  }

  validate() {
    if(this.generateCoordinate && typeof (this.generateCoordinate as any).validate === 'function') {
      (this.generateCoordinate as any).validate();
    }
    if(this.newsCoordinate && typeof (this.newsCoordinate as any).validate === 'function') {
      (this.newsCoordinate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

