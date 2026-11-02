// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTextGenerateJobRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the task. The description can be up to 1,024 bytes in length and must be encoded in UTF-8.
   * 
   * @example
   * Test Description
   */
  description?: string;
  /**
   * @remarks
   * The generation configuration. When Type is set to Title or MarketingCopy, you must specify the following fields:
   * - keywords: the keywords used to generate the title or marketing copy. Required.
   * - textLength: the word count of the generated copy. Valid values: 5 to 1000. The actual word count of the generated copy may be slightly less than or equal to this value, but will not exceed it. Required.
   * - targetCount: the number of copies to generate. Valid values: 1 to 1000. Required.
   * 
   * When Type is set to StoryboardScript, you must specify the following field:
   * - originText: the original copy used to generate the storyboard script. Required.
   * 
   * @example
   * {"keywords":"New store cake,Animal cream","textLength":100,"targetCount":3} or {"originText": "A new cake shop has opened on the street,Selling cream cakes,Fruit cake,Bread,Muffins, etc..A coffee shop has opened across from the cake shop,An endless stream of customers."}
   */
  generateConfig?: string;
  /**
   * @remarks
   * The title of the task.
   * 
   * - The length cannot exceed 128 bytes.
   * 
   * - The title must be encoded in UTF-8.
   * 
   * @example
   * Test Title
   */
  title?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * - MarketingCopy: marketing copy
   * - Title: short video title
   * - StoryboardScript: storyboard script generated from copy
   * 
   * @example
   * MarketingCopy
   */
  type?: string;
  /**
   * @remarks
   * The custom settings in JSON format. The length cannot exceed 512 bytes. [Custom callback URL configuration](https://help.aliyun.com/document_detail/451631.html) is supported.
   * 
   * @example
   * {"NotifyAddress":"http://xx.xx.xxx"}
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

