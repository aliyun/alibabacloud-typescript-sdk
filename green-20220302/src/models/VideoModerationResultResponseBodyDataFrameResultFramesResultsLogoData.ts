// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoDataLocation } from "./VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoDataLocation";
import { VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoDataLogo } from "./VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoDataLogo";


export class VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoData extends $dara.Model {
  /**
   * @remarks
   * The location of the logo.
   */
  location?: VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoDataLocation;
  /**
   * @remarks
   * Logo information.
   */
  logo?: VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoDataLogo[];
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      logo: 'Logo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoDataLocation,
      logo: { 'type': 'array', 'itemType': VideoModerationResultResponseBodyDataFrameResultFramesResultsLogoDataLogo },
    };
  }

  validate() {
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    if(Array.isArray(this.logo)) {
      $dara.Model.validateArray(this.logo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

