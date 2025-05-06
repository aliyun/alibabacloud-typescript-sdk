// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCompletionRequestServiceInspectionInspectionContents extends $dara.Model {
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

