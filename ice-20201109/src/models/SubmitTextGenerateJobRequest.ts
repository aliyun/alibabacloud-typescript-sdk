// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTextGenerateJobRequest extends $dara.Model {
  /**
   * @remarks
   * The job description, with a maximum length of 1,024 bytes (UTF-8 encoded).
   * 
   * @example
   * Test description
   */
  description?: string;
  /**
   * @remarks
   * The generation configuration, in JSON format.
   * 
   * If `Type` is set to `Title` or `MarketingCopy`, specify the following fields:
   * 
   * - `keywords`: The keywords used to generate the title or marketing copy. This parameter is required.
   * 
   * - `textLength`: The target length of the generated text, in characters. Valid values: 5 to 1,000. The actual length of the output is less than or equal to this value. This parameter is required.
   * 
   * - `targetCount`: The number of copy variations to generate. Valid values: 1 to 1,000. This parameter is required.
   * 
   * If `Type` is set to `StoryboardScript`, specify the following field:
   * 
   * - `originText`: The original text used to generate the storyboard script. This parameter is required.
   * 
   * @example
   * {"keywords":"New cake shop, animal cream","textLength":100,"targetCount":3}
   * or
   * {"originText": "A new cake shop just opened on the street, selling cream cakes, fruit cakes, bread, muffins, etc. A coffee shop opened across from the cake shop, with a steady stream of customers."}
   */
  generateConfig?: string;
  /**
   * @remarks
   * The job title.
   * 
   * \\- The maximum length is 128 bytes.
   * 
   * \\- UTF-8 encoding is required.
   * 
   * @example
   * Test title
   */
  title?: string;
  /**
   * @remarks
   * The job type.
   * 
   * **Valid values:**
   * 
   * - `MarketingCopy`: Generates marketing copy.
   * 
   * - `Title`: Generates a short video title.
   * 
   * - `StoryboardScript`: Generates a storyboard script from text.
   * 
   * @example
   * MarketingCopy
   */
  type?: string;
  /**
   * @remarks
   * The custom settings in JSON format. The maximum length is 512 bytes. You can use this parameter to specify a [custom callback address](https://help.aliyun.com/document_detail/451631.html).
   * 
   * @example
   * {"NotifyAddress":"http://xx.xx.xxx"} or {"NotifyAddress":"https://xx.xx.xxx"} or {"NotifyAddress":"ice-callback-demo"}
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

