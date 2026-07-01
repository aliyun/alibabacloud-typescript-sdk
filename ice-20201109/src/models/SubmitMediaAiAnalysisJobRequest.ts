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
   * {"MediaType":"video","Media":"https://your-bucket.oss-cn-shanghai.aliyuncs.com/your_movie.mp4"}
   * or
   * {"Type":"Media","Media":"adbf5a778175ee757c34d0eba4******"}
   */
  input?: string;
  /**
   * @remarks
   * Custom settings in JSON format, with a maximum length of 512 bytes. Supports [custom webhook address configuration](https://help.aliyun.com/document_detail/451631.html).
   * 
   * @example
   * {"NotifyAddress":"https://xx.com/xx"}
   */
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

