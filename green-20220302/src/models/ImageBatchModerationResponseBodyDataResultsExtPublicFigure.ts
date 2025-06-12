// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageBatchModerationResponseBodyDataResultsExtPublicFigureLocation } from "./ImageBatchModerationResponseBodyDataResultsExtPublicFigureLocation";


export class ImageBatchModerationResponseBodyDataResultsExtPublicFigure extends $dara.Model {
  /**
   * @remarks
   * Identify the encoded information of the person.
   * 
   * @example
   * 12324222
   */
  figureId?: string;
  /**
   * @remarks
   * The identified person\\"s name information.
   * 
   * @example
   * xxxxx
   */
  figureName?: string;
  /**
   * @remarks
   * The location information of the identifier.
   */
  location?: ImageBatchModerationResponseBodyDataResultsExtPublicFigureLocation[];
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
      location: { 'type': 'array', 'itemType': ImageBatchModerationResponseBodyDataResultsExtPublicFigureLocation },
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

