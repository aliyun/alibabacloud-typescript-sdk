// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageModerationResponseBodyDataExtPublicFigureLocation } from "./ImageModerationResponseBodyDataExtPublicFigureLocation";


export class ImageModerationResponseBodyDataExtPublicFigure extends $dara.Model {
  /**
   * @remarks
   * Identified person coding information.
   * 
   * @example
   * xx
   */
  figureId?: string;
  /**
   * @remarks
   * Identified person name information.
   * 
   * @example
   * xx
   */
  figureName?: string;
  /**
   * @remarks
   * the data array of location info
   */
  location?: ImageModerationResponseBodyDataExtPublicFigureLocation[];
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
      location: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataExtPublicFigureLocation },
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

