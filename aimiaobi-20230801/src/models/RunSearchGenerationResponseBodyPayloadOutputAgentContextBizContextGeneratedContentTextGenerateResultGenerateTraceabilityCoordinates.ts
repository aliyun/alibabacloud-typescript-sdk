// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinatesGenerateCoordinate } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinatesGenerateCoordinate";
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinatesNewsCoordinate } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinatesNewsCoordinate";


export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinates extends $dara.Model {
  generateCoordinate?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinatesGenerateCoordinate;
  newsCoordinate?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinatesNewsCoordinate;
  static names(): { [key: string]: string } {
    return {
      generateCoordinate: 'GenerateCoordinate',
      newsCoordinate: 'NewsCoordinate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateCoordinate: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinatesGenerateCoordinate,
      newsCoordinate: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTextGenerateResultGenerateTraceabilityCoordinatesNewsCoordinate,
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

