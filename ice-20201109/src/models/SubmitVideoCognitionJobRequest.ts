// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoCognitionJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * If `Type` is `OSS`, specify the Object Storage Service (OSS) URL of the media file. Example: `OSS://test-bucket/video/202208/test.mp4`
   * 
   * If `Type` is `Media`, specify the media ID. Example: `c5c62d8f0361337cab312dce8e77dc6d`
   * 
   * If `Type` is `URL`, specify the HTTP URL of the media file. Example: `https://zc-test.oss-cn-shanghai.aliyuncs.com/test/unknowFace.mp4`
   * 
   * @example
   * c5c62d8f03613************c6d
   */
  media?: string;
  /**
   * @remarks
   * The type of the input media. Valid values:
   * 
   * - `OSS`
   * 
   * - `Media`
   * 
   * - `URL`
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
   * The input media object.
   */
  input?: SubmitVideoCognitionJobRequestInput;
  /**
   * @remarks
   * A JSON string containing additional parameters for operators such as natural language processing, shot detection, custom tagging, and action recognition.
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
   * The template configuration.
   */
  templateConfig?: string;
  /**
   * @remarks
   * The ID of the template that specifies the analysis algorithms to use. For more information about managing templates, see [Create Custom Template](https://help.aliyun.com/zh/ims/developer-reference/api-ice-2020-11-09-createcustomtemplate?spm=a2c4g.11186623.help-menu-193643.d_5_0_3_3_0_0.17b66afamjKySv) and [AI-powered tagging template](https://help.aliyun.com/zh/ims/user-guide/smart-tagging-template?spm=a2c4g.11186623.0.i15).
   * 
   * @example
   * 39f8e0bc00***************
   */
  templateId?: string;
  /**
   * @remarks
   * The title of the video. The title can contain Chinese characters, English letters, digits, and hyphens (-). The title cannot start with a special character and must not exceed 256 bytes in length.
   * 
   * @example
   * example-title-****
   */
  title?: string;
  /**
   * @remarks
   * The user-defined data. The service returns this data unmodified in the callback notification. This parameter cannot exceed 1,024 bytes.
   * 
   * @example
   * {"test":1}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      params: 'Params',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: SubmitVideoCognitionJobRequestInput,
      params: 'string',
      templateConfig: 'string',
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

