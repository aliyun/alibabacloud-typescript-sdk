// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitEnterpriseVocAnalysisTaskRequestContents extends $dara.Model {
  extraInfo?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      extraInfo: 'ExtraInfo',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraInfo: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

