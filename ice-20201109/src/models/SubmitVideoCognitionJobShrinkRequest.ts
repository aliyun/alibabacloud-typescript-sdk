// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoCognitionJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The input media structure.
   */
  inputShrink?: string;
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
      inputShrink: 'Input',
      params: 'Params',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputShrink: 'string',
      params: 'string',
      templateConfig: 'string',
      templateId: 'string',
      title: 'string',
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

