// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoCognitionJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * If the Type parameter is set to OSS, specify the OSS address, such as OSS://test-bucket/video/202208/test.mp4.
   * 
   * If the Type parameter is set to Media, specify the mediaId, such as c5c62d8f0361337cab312dce8e77dc6d.
   * 
   * If the Type parameter is set to URL, specify the HTTP URL, such as https://zc-test.oss-cn-shanghai.aliyuncs.com/test/unknowFace.mp4.
   * 
   * @example
   * c5c62d8f03613************c6d
   */
  media?: string;
  /**
   * @remarks
   * The media type. Valid values:
   * 
   * - OSS
   * 
   * - Media
   * 
   * - URL
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
   * The input media structure.
   */
  input?: SubmitVideoCognitionJobRequestInput;
  /**
   * @remarks
   * The additional request parameters, represented as a JSON string. This parameter supports additional parameters for operators such as natural language processing, shot detection, custom tagging, and action recognition.
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
  templateConfig?: string;
  /**
   * @remarks
   * The template ID used to specify the analysis algorithm. For template-related operations, refer to [Create a custom template](https://www.alibabacloud.com/help/en/ims/developer-reference/api-ice-2020-11-09-createcustomtemplate) and [Smart tagging template](https://www.alibabacloud.com/help/en/ims/user-guide/smart-tagging-template).
   * 
   * @example
   * 39f8e0bc00***************
   */
  templateId?: string;
  /**
   * @remarks
   * The video title. The title supports Chinese characters, English letters, digits, and hyphens (-). It cannot start with a special character and cannot exceed 256 bytes in length.
   * 
   * @example
   * example-title-****
   */
  title?: string;
  /**
   * @remarks
   * The user-defined data. The data is returned as-is when the result is retrieved. The length cannot exceed 1,024 bytes.
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

