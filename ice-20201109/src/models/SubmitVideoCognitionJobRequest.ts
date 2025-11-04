// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoCognitionJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * If Type is set to OSS, specify an OSS path. Example: OSS://test-bucket/video/202208/test.mp4.
   * 
   * If Type is set to Media, specify a media asset ID. Example: c5c62d8f0361337cab312dce8e77dc6d.
   * 
   * If Type is set to URL, specify an HTTP URL. Example: https://zc-test.oss-cn-shanghai.aliyuncs.com/test/unknowFace.mp4.
   * 
   * @example
   * c5c62d8f03613************c6d
   */
  media?: string;
  /**
   * @remarks
   * The type of media input. Valid values:
   * 
   * *   OSS
   * *   Media
   * *   URL
   * 
   * @example
   * Media
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitVideoCognitionJobRequest extends $dara.Model {
  /**
   * @remarks
   * The media input object.
   */
  input?: SubmitVideoCognitionJobRequestInput;
  /**
   * @remarks
   * Additional request parameters, provided as a JSON string. This is used to pass specific settings for various AI analysis modules, such as Natural Language Processing (NLP), shot segmentation, tagging, and action recognition.
   * 
   * @example
   * {
   * 	"nlpParams": {
   * 		"sourceLanguage": "cn",
   * 		"diarizationEnabled": true,
   * 		"speakerCount": 2,
   * 		"summarizationEnabled": true,
   * 		"summarizationTypes": "Paragraph,Conversational,QuestionsAnswering,MindMap",
   * 		"translationEnabled": true,
   * 		"targetLanguages": "en",
   * 		"autoChaptersEnabled": true,
   * 		"meetingAssistanceEnabled": true
   * 	}
   * }
   */
  params?: string;
  /**
   * @remarks
   * The ID of the template that specifies the analysis algorithms to be used. For details, see [CreateCustomTemplate](https://help.aliyun.com/zh/ims/developer-reference/api-ice-2020-11-09-createcustomtemplate?spm=a2c4g.11186623.help-menu-193643.d_5_0_3_3_0_0.17b66afamjKySv) and [smart tagging template](https://help.aliyun.com/zh/ims/user-guide/smart-tagging-template?spm=a2c4g.11186623.0.i15).
   * 
   * @example
   * 39f8e0bc00***************
   */
  templateId?: string;
  /**
   * @remarks
   * The video title. It supports letters, digits, and hyphens (-), and cannot start with a special character. Max length: 256 bytes.
   * 
   * @example
   * example-title-****
   */
  title?: string;
  /**
   * @remarks
   * The user-defined data that is passed through and returned as-is in the response. Max length: 1,024 bytes.
   * 
   * @example
   * {"test":1}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      params: 'Params',
      templateId: 'TemplateId',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: SubmitVideoCognitionJobRequestInput,
      params: 'string',
      templateId: 'string',
      title: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

