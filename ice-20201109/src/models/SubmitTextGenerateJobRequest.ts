// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTextGenerateJobRequest extends $dara.Model {
  /**
   * @remarks
   * The job description, which can be up to 1,024 bytes in length and must be encoded in UTF-8.
   */
  description?: string;
  /**
   * @remarks
   * The text generation configurations, including keywords and the requirements for the word count and number of output copies.
   */
  generateConfig?: string;
  /**
   * @remarks
   * The job title.
   * 
   * The job title can be up to 128 bytes in length.
   * 
   * The value must be encoded in UTF-8.
   */
  title?: string;
  /**
   * @remarks
   * The job type.
   * 
   * Valid values:
   * 
   * *   MarketingCopy: the marketing copy.
   * *   Title: the short video title.
   * 
   * @example
   * MarketingCopy
   */
  type?: string;
  /**
   * @remarks
   * The user-defined data in the JSON format, which can be up to 512 bytes in length. You can specify a custom callback URL. For more information, see [Configure a callback upon editing completion](https://help.aliyun.com/document_detail/451631.html).
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      generateConfig: 'GenerateConfig',
      title: 'Title',
      type: 'Type',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      generateConfig: 'string',
      title: 'string',
      type: 'string',
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

