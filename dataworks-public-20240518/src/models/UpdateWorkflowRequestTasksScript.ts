// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkflowRequestTasksScript extends $dara.Model {
  /**
   * @remarks
   * The script content.
   * 
   * @example
   * echo "helloWorld"
   */
  content?: string;
  /**
   * @remarks
   * The script parameters.
   * 
   * @example
   * para1=$bizdate
   */
  parameters?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      parameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

