// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VideoModerationResultResponseBodyDataFrameResultFramesResultsPublicFigureLocation } from "./VideoModerationResultResponseBodyDataFrameResultFramesResultsPublicFigureLocation";


export class VideoModerationResultResponseBodyDataFrameResultFramesResultsPublicFigure extends $dara.Model {
  /**
   * @remarks
   * The information about the code of the identified figure.
   * 
   * @example
   * xxx001
   */
  figureId?: string;
  figureName?: string;
  location?: VideoModerationResultResponseBodyDataFrameResultFramesResultsPublicFigureLocation[];
  static names(): { [key: string]: string } {
    return {
      figureId: 'FigureId',
      figureName: 'FigureName',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureId: 'string',
      figureName: 'string',
      location: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFramesResultsPublicFigureLocation },
    };
  }

  validate() {
    if(Array.isArray(this.location)) {
      $dara.Model.validateArray(this.location);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

