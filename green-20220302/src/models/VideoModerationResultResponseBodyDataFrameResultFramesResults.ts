// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VideoModerationResultResponseBodyDataFrameResultFramesResultsCustomImage } from "./VideoModerationResultResponseBodyDataFrameResultFramesResultsCustomImage";
import { VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoData } from "./VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoData";
import { VideoModerationResultResponseBodyDataFrameResultFramesResultsPublicFigure } from "./VideoModerationResultResponseBodyDataFrameResultFramesResultsPublicFigure";
import { VideoModerationResultResponseBodyDataFrameResultFramesResultsResult } from "./VideoModerationResultResponseBodyDataFrameResultFramesResultsResult";


export class VideoModerationResultResponseBodyDataFrameResultFramesResults extends $dara.Model {
  /**
   * @remarks
   * If a custom image library is hit, information about the custom image library is returned.
   */
  customImage?: VideoModerationResultResponseBodyDataFrameResultFramesResultsCustomImage[];
  /**
   * @remarks
   * Returns logo information when the video contains a logo.
   */
  logoData?: VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoData[];
  /**
   * @remarks
   * If the video contains a specific figure, the code of the identified figure is returned.
   */
  publicFigure?: VideoModerationResultResponseBodyDataFrameResultFramesResultsPublicFigure[];
  /**
   * @remarks
   * The results of frame moderation parameters such as the label parameter and the confidence parameter.
   */
  result?: VideoModerationResultResponseBodyDataFrameResultFramesResultsResult[];
  /**
   * @remarks
   * The moderation service that is called.
   * 
   * @example
   * tonalityImprove
   */
  service?: string;
  /**
   * @remarks
   * The information about the text hit in the image is returned.
   */
  textInImage?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      customImage: 'CustomImage',
      logoData: 'LogoData',
      publicFigure: 'PublicFigure',
      result: 'Result',
      service: 'Service',
      textInImage: 'TextInImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customImage: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFramesResultsCustomImage },
      logoData: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoData },
      publicFigure: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFramesResultsPublicFigure },
      result: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFramesResultsResult },
      service: 'string',
      textInImage: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.customImage)) {
      $dara.Model.validateArray(this.customImage);
    }
    if(Array.isArray(this.logoData)) {
      $dara.Model.validateArray(this.logoData);
    }
    if(Array.isArray(this.publicFigure)) {
      $dara.Model.validateArray(this.publicFigure);
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    if(this.textInImage) {
      $dara.Model.validateMap(this.textInImage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

