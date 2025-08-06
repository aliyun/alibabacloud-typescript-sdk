// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAICaptionExtractionJobRequest extends $dara.Model {
  AIPipelineId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  jobConfig?: string;
  userData?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      AIPipelineId: 'AIPipelineId',
      jobConfig: 'JobConfig',
      userData: 'UserData',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIPipelineId: 'string',
      jobConfig: 'string',
      userData: 'string',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

