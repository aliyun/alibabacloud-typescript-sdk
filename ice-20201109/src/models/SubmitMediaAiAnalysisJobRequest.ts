// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitMediaAiAnalysisJobRequest extends $dara.Model {
  /**
   * @remarks
   * The media asset analysis parameters.
   * 
   * @example
   * {"nlpParams":{"sourceLanguage":"cn","diarizationEnabled":true,"speakerCount":0,"summarizationEnabled":false,"translationEnabled":false}}
   */
  analysisParams?: string;
  /**
   * @remarks
   * The input media. Only OSS URLs and media asset IDs in the same region are supported.
   * 
   * @example
   * {"MediaType":"video","Media":"https://your-bucket.oss-cn-shanghai.aliyuncs.com/your_movie.mp4"}
   * or
   * {"Type":"Media","Media":"adbf5a778175ee757c34d0eba4******"}
   */
  input?: string;
  /**
   * @remarks
   * The custom settings in JSON format. The maximum length is 512 bytes. [Custom callback URL configuration](https://help.aliyun.com/document_detail/451631.html) is supported.
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

