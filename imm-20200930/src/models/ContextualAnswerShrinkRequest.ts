// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContextualAnswerShrinkRequest extends $dara.Model {
  filesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  messagesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      filesShrink: 'Files',
      messagesShrink: 'Messages',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filesShrink: 'string',
      messagesShrink: 'string',
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

