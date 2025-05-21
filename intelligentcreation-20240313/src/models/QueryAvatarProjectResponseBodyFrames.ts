// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAvatarProjectResponseBodyFramesLayers } from "./QueryAvatarProjectResponseBodyFramesLayers";
import { QueryAvatarProjectResponseBodyFramesVideoScript } from "./QueryAvatarProjectResponseBodyFramesVideoScript";


export class QueryAvatarProjectResponseBodyFrames extends $dara.Model {
  index?: number;
  layers?: QueryAvatarProjectResponseBodyFramesLayers[];
  videoScript?: QueryAvatarProjectResponseBodyFramesVideoScript;
  static names(): { [key: string]: string } {
    return {
      index: 'index',
      layers: 'layers',
      videoScript: 'videoScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      layers: { 'type': 'array', 'itemType': QueryAvatarProjectResponseBodyFramesLayers },
      videoScript: QueryAvatarProjectResponseBodyFramesVideoScript,
    };
  }

  validate() {
    if(Array.isArray(this.layers)) {
      $dara.Model.validateArray(this.layers);
    }
    if(this.videoScript && typeof (this.videoScript as any).validate === 'function') {
      (this.videoScript as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

