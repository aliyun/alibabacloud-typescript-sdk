// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoCognitionJobShrinkRequest extends $dara.Model {
  inputShrink?: string;
  /**
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
   * @example
   * 39f8e0bc00***************
   */
  templateId?: string;
  /**
   * @example
   * example-title-****
   */
  title?: string;
  /**
   * @example
   * {"test":1}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      inputShrink: 'Input',
      params: 'Params',
      templateId: 'TemplateId',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputShrink: 'string',
      params: 'string',
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

