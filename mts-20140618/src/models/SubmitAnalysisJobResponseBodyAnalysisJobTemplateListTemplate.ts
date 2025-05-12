// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateAudio } from "./SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateAudio";
import { SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateContainer } from "./SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateContainer";
import { SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfig } from "./SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfig";
import { SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateTransConfig } from "./SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateTransConfig";
import { SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateVideo } from "./SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateVideo";


export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplate extends $dara.Model {
  /**
   * @remarks
   * The audio codec configurations.
   */
  audio?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateAudio;
  /**
   * @remarks
   * The container format configurations.
   */
  container?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateContainer;
  /**
   * @remarks
   * The ID of the transcoding template.
   * 
   * @example
   * S00000000-00****
   */
  id?: string;
  /**
   * @remarks
   * The transmuxing configurations.
   */
  muxConfig?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfig;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * FLV-UD
   */
  name?: string;
  /**
   * @remarks
   * The status of the template.
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
   * The general transcoding configurations.
   */
  transConfig?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateTransConfig;
  /**
   * @remarks
   * The video codec configurations.
   */
  video?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateVideo;
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
      audio: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateAudio,
      container: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateContainer,
      id: 'string',
      muxConfig: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfig,
      name: 'string',
      state: 'string',
      transConfig: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateTransConfig,
      video: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateVideo,
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

