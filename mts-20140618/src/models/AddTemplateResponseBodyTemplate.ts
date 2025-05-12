// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddTemplateResponseBodyTemplateAudio } from "./AddTemplateResponseBodyTemplateAudio";
import { AddTemplateResponseBodyTemplateContainer } from "./AddTemplateResponseBodyTemplateContainer";
import { AddTemplateResponseBodyTemplateMuxConfig } from "./AddTemplateResponseBodyTemplateMuxConfig";
import { AddTemplateResponseBodyTemplateTransConfig } from "./AddTemplateResponseBodyTemplateTransConfig";
import { AddTemplateResponseBodyTemplateVideo } from "./AddTemplateResponseBodyTemplateVideo";


export class AddTemplateResponseBodyTemplate extends $dara.Model {
  /**
   * @remarks
   * The audio codec configurations.
   */
  audio?: AddTemplateResponseBodyTemplateAudio;
  /**
   * @remarks
   * The container format settings.
   */
  container?: AddTemplateResponseBodyTemplateContainer;
  /**
   * @remarks
   * The ID of the transcoding template. We recommend that you keep this ID for subsequent operation calls.
   * 
   * @example
   * 16f01ad6175e4230ac42bb5182cd****
   */
  id?: string;
  /**
   * @remarks
   * The transmuxing settings.
   */
  muxConfig?: AddTemplateResponseBodyTemplateMuxConfig;
  /**
   * @remarks
   * The name of the transcoding template.
   * 
   * @example
   * mps-example
   */
  name?: string;
  /**
   * @remarks
   * The status of the template. Valid values:
   * 
   * *   **Normal**: The template is normal.
   * *   **Deleted**: The template is deleted.
   * 
   * @example
   * Normal
   */
  state?: string;
  /**
   * @remarks
   * The general transcoding settings.
   */
  transConfig?: AddTemplateResponseBodyTemplateTransConfig;
  /**
   * @remarks
   * The video codec configurations.
   */
  video?: AddTemplateResponseBodyTemplateVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      id: 'Id',
      muxConfig: 'MuxConfig',
      name: 'Name',
      state: 'State',
      transConfig: 'TransConfig',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: AddTemplateResponseBodyTemplateAudio,
      container: AddTemplateResponseBodyTemplateContainer,
      id: 'string',
      muxConfig: AddTemplateResponseBodyTemplateMuxConfig,
      name: 'string',
      state: 'string',
      transConfig: AddTemplateResponseBodyTemplateTransConfig,
      video: AddTemplateResponseBodyTemplateVideo,
    };
  }

  validate() {
    if(this.audio && typeof (this.audio as any).validate === 'function') {
      (this.audio as any).validate();
    }
    if(this.container && typeof (this.container as any).validate === 'function') {
      (this.container as any).validate();
    }
    if(this.muxConfig && typeof (this.muxConfig as any).validate === 'function') {
      (this.muxConfig as any).validate();
    }
    if(this.transConfig && typeof (this.transConfig as any).validate === 'function') {
      (this.transConfig as any).validate();
    }
    if(this.video && typeof (this.video as any).validate === 'function') {
      (this.video as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

