// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateAudio } from "./QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateAudio";
import { QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateContainer } from "./QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateContainer";
import { QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateMuxConfig } from "./QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateMuxConfig";
import { QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateTransConfig } from "./QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateTransConfig";
import { QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateVideo } from "./QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateVideo";


export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplate extends $dara.Model {
  /**
   * @remarks
   * The audio codec configurations.
   */
  audio?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateAudio;
  /**
   * @remarks
   * The container format configurations.
   */
  container?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateContainer;
  /**
   * @remarks
   * The transcoding template ID.
   * 
   * @example
   * S00000000-00****
   */
  id?: string;
  /**
   * @remarks
   * The transmuxing configurations.
   */
  muxConfig?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateMuxConfig;
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
   * The state of the template. Valid values:
   * 
   * *   **Normal**
   * *   **Deleted**
   * 
   * @example
   * Normal
   */
  state?: string;
  /**
   * @remarks
   * The general transcoding configurations.
   */
  transConfig?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateTransConfig;
  /**
   * @remarks
   * The video codec configurations.
   */
  video?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateVideo;
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
      audio: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateAudio,
      container: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateContainer,
      id: 'string',
      muxConfig: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateMuxConfig,
      name: 'string',
      state: 'string',
      transConfig: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateTransConfig,
      video: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobTemplateListTemplateVideo,
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

