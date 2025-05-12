// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateTemplateResponseBodyTemplateAudio } from "./UpdateTemplateResponseBodyTemplateAudio";
import { UpdateTemplateResponseBodyTemplateContainer } from "./UpdateTemplateResponseBodyTemplateContainer";
import { UpdateTemplateResponseBodyTemplateMuxConfig } from "./UpdateTemplateResponseBodyTemplateMuxConfig";
import { UpdateTemplateResponseBodyTemplateTransConfig } from "./UpdateTemplateResponseBodyTemplateTransConfig";
import { UpdateTemplateResponseBodyTemplateVideo } from "./UpdateTemplateResponseBodyTemplateVideo";


export class UpdateTemplateResponseBodyTemplate extends $dara.Model {
  /**
   * @remarks
   * The audio codec settings.
   */
  audio?: UpdateTemplateResponseBodyTemplateAudio;
  /**
   * @remarks
   * The container format.
   */
  container?: UpdateTemplateResponseBodyTemplateContainer;
  /**
   * @remarks
   * The container configurations.
   * 
   * @example
   * 16f01ad6175e4230ac42bb5182cd****
   */
  id?: string;
  /**
   * @remarks
   * The transmuxing configurations for WebP.
   */
  muxConfig?: UpdateTemplateResponseBodyTemplateMuxConfig;
  /**
   * @remarks
   * The audio codec configurations.
   * 
   * @example
   * MPS-example
   */
  name?: string;
  /**
   * @remarks
   * The transmuxing configurations.
   * 
   * @example
   * Normal
   */
  state?: string;
  /**
   * @remarks
   * Indicates whether the audio bitrate is checked. If the bitrate of the output audio is greater than the bitrate of the input audio, the bitrate of the input audio is retained after transcoding. In this case, the specified audio bitrate does not take effect. This parameter has a lower priority than the IsCheckAudioBitrateFail parameter. Valid values:
   * 
   * *   **true**: The audio bitrate is checked.
   * 
   * *   **false**: The audio bitrate is not checked.
   * 
   * *   Default value:
   * 
   *     *   If the parameter is left empty and the codec of the output audio is different from that of the input audio, the default value is false.
   *     *   If the parameter is left empty and the codec of the output audio is the same as that of the input audio, the default value is true.
   */
  transConfig?: UpdateTemplateResponseBodyTemplateTransConfig;
  /**
   * @remarks
   * The video codec configurations.
   */
  video?: UpdateTemplateResponseBodyTemplateVideo;
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
      audio: UpdateTemplateResponseBodyTemplateAudio,
      container: UpdateTemplateResponseBodyTemplateContainer,
      id: 'string',
      muxConfig: UpdateTemplateResponseBodyTemplateMuxConfig,
      name: 'string',
      state: 'string',
      transConfig: UpdateTemplateResponseBodyTemplateTransConfig,
      video: UpdateTemplateResponseBodyTemplateVideo,
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

