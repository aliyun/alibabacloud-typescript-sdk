// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultGenerateTraceabilityCoordinatesGenerateCoordinate extends $dara.Model {
  /**
   * @example
   * 1
   */
  x?: number;
  /**
   * @example
   * 1
   */
  y?: number;
  /**
   * @example
   * 1
   */
  z?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
      z: 'Z',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
      z: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

