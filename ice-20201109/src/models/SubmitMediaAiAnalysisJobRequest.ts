// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitMediaAiAnalysisJobRequest extends $dara.Model {
  /**
   * @remarks
   * The analysis parameters.
   * 
   * @example
   * {"nlpParams":{"sourceLanguage":"cn","diarizationEnabled":true,"speakerCount":0,"summarizationEnabled":false,"translationEnabled":false}}
   */
  analysisParams?: string;
  /**
   * @remarks
   * The media asset that you want to analyze. You can specify an Object Storage Service (OSS) URL, a media asset ID, or an external URL.
   * 
   * @example
   * {"MediaType":"video","Media":"https://xxx.com/your_movie.mp4"}
   */
  input?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      analysisParams: 'AnalysisParams',
      input: 'Input',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisParams: 'string',
      input: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

