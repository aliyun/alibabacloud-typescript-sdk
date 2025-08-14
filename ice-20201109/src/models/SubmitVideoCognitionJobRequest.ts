// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVideoCognitionJobRequestInput extends $dara.Model {
  /**
   * @example
   * c5c62d8f03613************c6d
   */
  media?: string;
  /**
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
  input?: SubmitVideoCognitionJobRequestInput;
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

