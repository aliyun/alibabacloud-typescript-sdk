// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageBatchModerationResponseBodyDataResultsExtTextInImageOcrResultLocation } from "./ImageBatchModerationResponseBodyDataResultsExtTextInImageOcrResultLocation";


export class ImageBatchModerationResponseBodyDataResultsExtTextInImageOcrResult extends $dara.Model {
  /**
   * @remarks
   * Text line coordinate information.
   */
  location?: ImageBatchModerationResponseBodyDataResultsExtTextInImageOcrResultLocation;
  /**
   * @remarks
   * Text information.
   * 
   * @example
   * abcd
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: ImageBatchModerationResponseBodyDataResultsExtTextInImageOcrResultLocation,
      text: 'string',
    };
  }

  validate() {
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

