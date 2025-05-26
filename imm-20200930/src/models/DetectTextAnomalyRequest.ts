// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectTextAnomalyRequest extends $dara.Model {
  /**
   * @remarks
   * The text to be detected. It can contain up to 10,000 characters (including punctuation marks). Only Chinese text can be detected.
   * 
   * This parameter is required.
   * 
   * @example
   * content
   */
  content?: string;
  /**
   * @remarks
   * The name of the project. For more information, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

