// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitProjectTaskRequestFramesLayers } from "./SubmitProjectTaskRequestFramesLayers";
import { SubmitProjectTaskRequestFramesSubtitle } from "./SubmitProjectTaskRequestFramesSubtitle";
import { SubmitProjectTaskRequestFramesVideoScript } from "./SubmitProjectTaskRequestFramesVideoScript";


export class SubmitProjectTaskRequestFrames extends $dara.Model {
  /**
   * @example
   * 1
   */
  index?: number;
  layers?: SubmitProjectTaskRequestFramesLayers[];
  subtitle?: SubmitProjectTaskRequestFramesSubtitle;
  videoScript?: SubmitProjectTaskRequestFramesVideoScript;
  static names(): { [key: string]: string } {
    return {
      index: 'index',
      layers: 'layers',
      subtitle: 'subtitle',
      videoScript: 'videoScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      layers: { 'type': 'array', 'itemType': SubmitProjectTaskRequestFramesLayers },
      subtitle: SubmitProjectTaskRequestFramesSubtitle,
      videoScript: SubmitProjectTaskRequestFramesVideoScript,
    };
  }

  validate() {
    if(Array.isArray(this.layers)) {
      $dara.Model.validateArray(this.layers);
    }
    if(this.subtitle && typeof (this.subtitle as any).validate === 'function') {
      (this.subtitle as any).validate();
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

