// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SaveAvatarProjectRequestFramesLayers } from "./SaveAvatarProjectRequestFramesLayers";
import { SaveAvatarProjectRequestFramesVideoScript } from "./SaveAvatarProjectRequestFramesVideoScript";


export class SaveAvatarProjectRequestFrames extends $dara.Model {
  index?: number;
  layers?: SaveAvatarProjectRequestFramesLayers[];
  videoScript?: SaveAvatarProjectRequestFramesVideoScript;
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
      layers: { 'type': 'array', 'itemType': SaveAvatarProjectRequestFramesLayers },
      videoScript: SaveAvatarProjectRequestFramesVideoScript,
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

