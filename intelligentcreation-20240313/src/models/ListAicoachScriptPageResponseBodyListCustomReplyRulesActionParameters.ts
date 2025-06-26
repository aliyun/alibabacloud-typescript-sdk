// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAICoachScriptPageResponseBodyListCustomReplyRulesActionParameters extends $dara.Model {
  assessPoint?: string;
  customContent?: string;
  static names(): { [key: string]: string } {
    return {
      assessPoint: 'assessPoint',
      customContent: 'customContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assessPoint: 'string',
      customContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

