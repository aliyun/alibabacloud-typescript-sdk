// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchTemplateResponseBodyTemplateListTemplateAudio } from "./SearchTemplateResponseBodyTemplateListTemplateAudio";
import { SearchTemplateResponseBodyTemplateListTemplateContainer } from "./SearchTemplateResponseBodyTemplateListTemplateContainer";
import { SearchTemplateResponseBodyTemplateListTemplateMuxConfig } from "./SearchTemplateResponseBodyTemplateListTemplateMuxConfig";
import { SearchTemplateResponseBodyTemplateListTemplateTransConfig } from "./SearchTemplateResponseBodyTemplateListTemplateTransConfig";
import { SearchTemplateResponseBodyTemplateListTemplateVideo } from "./SearchTemplateResponseBodyTemplateListTemplateVideo";


export class SearchTemplateResponseBodyTemplateListTemplate extends $dara.Model {
  /**
   * @remarks
   * The audio codec configurations.
   */
  audio?: SearchTemplateResponseBodyTemplateListTemplateAudio;
  /**
   * @remarks
   * The container format configurations.
   */
  container?: SearchTemplateResponseBodyTemplateListTemplateContainer;
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2021-03-04T06:44:43Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The transcoding template ID.
   * 
   * @example
   * 16f01ad6175e4230ac42bb5182cd****
   */
  id?: string;
  /**
   * @remarks
   * The transmuxing configurations.
   */
  muxConfig?: SearchTemplateResponseBodyTemplateListTemplateMuxConfig;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * MPS-example
   */
  name?: string;
  /**
   * @remarks
   * The status of the template. Valid values:
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
  transConfig?: SearchTemplateResponseBodyTemplateListTemplateTransConfig;
  /**
   * @remarks
   * The video codec configurations.
   */
  video?: SearchTemplateResponseBodyTemplateListTemplateVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      creationTime: 'CreationTime',
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
      audio: SearchTemplateResponseBodyTemplateListTemplateAudio,
      container: SearchTemplateResponseBodyTemplateListTemplateContainer,
      creationTime: 'string',
      id: 'string',
      muxConfig: SearchTemplateResponseBodyTemplateListTemplateMuxConfig,
      name: 'string',
      state: 'string',
      transConfig: SearchTemplateResponseBodyTemplateListTemplateTransConfig,
      video: SearchTemplateResponseBodyTemplateListTemplateVideo,
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

