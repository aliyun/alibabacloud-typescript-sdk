// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTopicSelectionPerspectiveAnalysisTaskRequestDocumentsComments extends $dara.Model {
  text?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

