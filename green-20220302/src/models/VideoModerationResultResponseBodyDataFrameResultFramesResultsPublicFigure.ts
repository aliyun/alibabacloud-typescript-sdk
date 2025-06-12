// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoModerationResultResponseBodyDataFrameResultFramesResultsPublicFigure extends $dara.Model {
  /**
   * @remarks
   * The information about the code of the identified figure.
   * 
   * @example
   * xxx001
   */
  figureId?: string;
  static names(): { [key: string]: string } {
    return {
      figureId: 'FigureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

